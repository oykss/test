// vite.config.js
import { defineConfig } from "file:///D:/Courses/Projects/test/node_modules/vite/dist/node/index.js";
import { glob } from "file:///D:/Courses/Projects/test/node_modules/glob/dist/esm/index.js";
import injectHTML from "file:///D:/Courses/Projects/test/node_modules/vite-plugin-html-inject/dist/index.mjs";
import FullReload from "file:///D:/Courses/Projects/test/node_modules/vite-plugin-full-reload/dist/index.js";
import SortCss from "file:///D:/Courses/Projects/test/node_modules/postcss-sort-media-queries/index.js";
import imagemin from "file:///D:/Courses/Projects/test/node_modules/vite-plugin-imagemin/dist/index.mjs";
var vite_config_default = defineConfig(({ command }) => {
  return {
    define: {
      [command === "serve" ? "global" : "_global"]: {}
    },
    root: "src",
    build: {
      sourcemap: true,
      rollupOptions: {
        input: glob.sync("./src/*.html"),
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return "vendor";
            }
          },
          entryFileNames: (chunkInfo) => {
            if (chunkInfo.name === "commonHelpers") {
              return "commonHelpers.js";
            }
            return "[name].js";
          },
          assetFileNames: (assetInfo) => {
            if (assetInfo.name && assetInfo.name.endsWith(".html")) {
              return "[name].[ext]";
            }
            return "assets/[name]-[hash][extname]";
          }
        }
      },
      outDir: "../dist",
      emptyOutDir: true
    },
    plugins: [
      injectHTML(),
      FullReload(["./src/**/**.html"]),
      SortCss({
        sort: "mobile-first"
      }),
      imagemin({
        gifsicle: {
          optimizationLevel: 7
        },
        optipng: {
          enabled: true
        },
        mozjpeg: {
          quality: 80
        },
        pngquant: {
          quality: [0.65, 0.9],
          speed: 4
        },
        svgo: {
          plugins: [
            {
              name: "preset-default",
              params: {
                overrides: {
                  removeViewBox: false
                }
              }
            }
          ]
        }
      })
    ]
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxDb3Vyc2VzXFxcXFByb2plY3RzXFxcXHRlc3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXENvdXJzZXNcXFxcUHJvamVjdHNcXFxcdGVzdFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovQ291cnNlcy9Qcm9qZWN0cy90ZXN0L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCB7IGdsb2IgfSBmcm9tICdnbG9iJztcclxuaW1wb3J0IGluamVjdEhUTUwgZnJvbSAndml0ZS1wbHVnaW4taHRtbC1pbmplY3QnO1xyXG5pbXBvcnQgRnVsbFJlbG9hZCBmcm9tICd2aXRlLXBsdWdpbi1mdWxsLXJlbG9hZCc7XHJcbmltcG9ydCBTb3J0Q3NzIGZyb20gJ3Bvc3Rjc3Mtc29ydC1tZWRpYS1xdWVyaWVzJztcclxuaW1wb3J0IGltYWdlbWluIGZyb20gJ3ZpdGUtcGx1Z2luLWltYWdlbWluJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBjb21tYW5kIH0pID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZGVmaW5lOiB7XHJcbiAgICAgIFtjb21tYW5kID09PSAnc2VydmUnID8gJ2dsb2JhbCcgOiAnX2dsb2JhbCddOiB7fSxcclxuICAgIH0sXHJcbiAgICByb290OiAnc3JjJyxcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgIHNvdXJjZW1hcDogdHJ1ZSxcclxuICAgICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICAgIGlucHV0OiBnbG9iLnN5bmMoJy4vc3JjLyouaHRtbCcpLFxyXG4gICAgICAgIG91dHB1dDoge1xyXG4gICAgICAgICAgbWFudWFsQ2h1bmtzKGlkKSB7XHJcbiAgICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzJykpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gJ3ZlbmRvcic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlbnRyeUZpbGVOYW1lczogY2h1bmtJbmZvID0+IHtcclxuICAgICAgICAgICAgaWYgKGNodW5rSW5mby5uYW1lID09PSAnY29tbW9uSGVscGVycycpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gJ2NvbW1vbkhlbHBlcnMuanMnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAnW25hbWVdLmpzJztcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBhc3NldEZpbGVOYW1lczogYXNzZXRJbmZvID0+IHtcclxuICAgICAgICAgICAgaWYgKGFzc2V0SW5mby5uYW1lICYmIGFzc2V0SW5mby5uYW1lLmVuZHNXaXRoKCcuaHRtbCcpKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuICdbbmFtZV0uW2V4dF0nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAnYXNzZXRzL1tuYW1lXS1baGFzaF1bZXh0bmFtZV0nO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBvdXREaXI6ICcuLi9kaXN0JyxcclxuICAgICAgZW1wdHlPdXREaXI6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICBpbmplY3RIVE1MKCksXHJcbiAgICAgIEZ1bGxSZWxvYWQoWycuL3NyYy8qKi8qKi5odG1sJ10pLFxyXG4gICAgICBTb3J0Q3NzKHtcclxuICAgICAgICBzb3J0OiAnbW9iaWxlLWZpcnN0JyxcclxuICAgICAgfSksXHJcbiAgICAgIGltYWdlbWluKHtcclxuICAgICAgICBnaWZzaWNsZToge1xyXG4gICAgICAgICAgb3B0aW1pemF0aW9uTGV2ZWw6IDcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpcG5nOiB7XHJcbiAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW96anBlZzoge1xyXG4gICAgICAgICAgcXVhbGl0eTogODAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwbmdxdWFudDoge1xyXG4gICAgICAgICAgcXVhbGl0eTogWzAuNjUsIDAuOV0sXHJcbiAgICAgICAgICBzcGVlZDogNCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN2Z286IHtcclxuICAgICAgICAgIHBsdWdpbnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG5hbWU6ICdwcmVzZXQtZGVmYXVsdCcsXHJcbiAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICBvdmVycmlkZXM6IHtcclxuICAgICAgICAgICAgICAgICAgcmVtb3ZlVmlld0JveDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgXSxcclxuICB9O1xyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFrUSxTQUFTLG9CQUFvQjtBQUMvUixTQUFTLFlBQVk7QUFDckIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sY0FBYztBQUVyQixJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLFFBQVEsTUFBTTtBQUMzQyxTQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsTUFDTixDQUFDLFlBQVksVUFBVSxXQUFXLFNBQVMsR0FBRyxDQUFDO0FBQUEsSUFDakQ7QUFBQSxJQUNBLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLFdBQVc7QUFBQSxNQUNYLGVBQWU7QUFBQSxRQUNiLE9BQU8sS0FBSyxLQUFLLGNBQWM7QUFBQSxRQUMvQixRQUFRO0FBQUEsVUFDTixhQUFhLElBQUk7QUFDZixnQkFBSSxHQUFHLFNBQVMsY0FBYyxHQUFHO0FBQy9CLHFCQUFPO0FBQUEsWUFDVDtBQUFBLFVBQ0Y7QUFBQSxVQUNBLGdCQUFnQixlQUFhO0FBQzNCLGdCQUFJLFVBQVUsU0FBUyxpQkFBaUI7QUFDdEMscUJBQU87QUFBQSxZQUNUO0FBQ0EsbUJBQU87QUFBQSxVQUNUO0FBQUEsVUFDQSxnQkFBZ0IsZUFBYTtBQUMzQixnQkFBSSxVQUFVLFFBQVEsVUFBVSxLQUFLLFNBQVMsT0FBTyxHQUFHO0FBQ3RELHFCQUFPO0FBQUEsWUFDVDtBQUNBLG1CQUFPO0FBQUEsVUFDVDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUEsTUFDUixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsV0FBVztBQUFBLE1BQ1gsV0FBVyxDQUFDLGtCQUFrQixDQUFDO0FBQUEsTUFDL0IsUUFBUTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1IsQ0FBQztBQUFBLE1BQ0QsU0FBUztBQUFBLFFBQ1AsVUFBVTtBQUFBLFVBQ1IsbUJBQW1CO0FBQUEsUUFDckI7QUFBQSxRQUNBLFNBQVM7QUFBQSxVQUNQLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQSxTQUFTO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0EsVUFBVTtBQUFBLFVBQ1IsU0FBUyxDQUFDLE1BQU0sR0FBRztBQUFBLFVBQ25CLE9BQU87QUFBQSxRQUNUO0FBQUEsUUFDQSxNQUFNO0FBQUEsVUFDSixTQUFTO0FBQUEsWUFDUDtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sUUFBUTtBQUFBLGdCQUNOLFdBQVc7QUFBQSxrQkFDVCxlQUFlO0FBQUEsZ0JBQ2pCO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0g7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
