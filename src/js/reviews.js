import Swiper from 'swiper';
import axios from 'axios';
import { Navigation } from 'swiper/modules';

const reviewList = document.querySelector('.swiper-wrapper');
const errorText = document.querySelector('.error-text');
const prevSlide = document.querySelector('.swiper-button-prev');
const nextSlide = document.querySelector('.swiper-button-next');
const sliderIcon = document.querySelector('.slider-icon');

const fetchReviews = async () => {
  try {
    const response = await axios.get(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    errorText.style.display = 'none';
    return response.data;
  } catch (error) {
    errorText.style.display = 'block';
    prevSlide.style.display = 'none';
    nextSlide.style.display = 'none';
    console.log(error);
  }
};

const createMarkup = reviews => {
  return reviews
    .map(
      review => `
        <div class='swiper-slide'>
        <li class='review-card'>
            <p class='review-text'>${review.review}</p>
            <div class='author-info'>
                <img src='${review.avatar_url}' alt='${review.author}' class='review-img'/>
                <p class='review-author'>${review.author}</p>
            </div>
        </li>
        </div>
    `
    )
    .join('');
};

export const renderReviews = async () => {
  const reviews = await fetchReviews();
  if (!reviews) {
    errorText.style.display = 'block';
    prevSlide.style.display = 'none';
    nextSlide.style.display = 'none';
    return;
  }

  const markup = createMarkup(reviews);
  reviewList.insertAdjacentHTML('beforeend', markup);

  const updateButtonsState = swiper => {
    if (swiper.isBeginning) {
      prevSlide.classList.add('disabled');
    } else {
      prevSlide.classList.remove('disabled');
      prevSlide.style.transition = 'all .3s ease-out allow-discrete';
      sliderIcon.style.transition = 'all .3s ease-out allow-discrete';
    }

    if (swiper.isEnd) {
      nextSlide.classList.add('disabled');
      nextSlide.style.transition = 'all .3s ease-out allow-discrete';
      sliderIcon.style.transition = 'all .3s ease-out allow-discrete';
    } else {
      nextSlide.classList.remove('disabled');
    }
  };

  new Swiper('.swiper', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 20,
    direction: 'horizontal',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    centeredSlides: true,
    on: {
      init: function () {
        updateButtonsState(this);
      },
      slideChange: function () {
        updateButtonsState(this);
      },
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 32,
      },
      1280: {
        spaceBetween: 32,
        centeredSlides: false,
        slidesPerView: 2,
      },
    },
  });
};
