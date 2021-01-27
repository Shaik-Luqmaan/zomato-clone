import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import { render, cleanup } from "@testing-library/react";
import HomeView from './HomeView';

afterEach(cleanup);

it("renders HomeView without crashing", () => {
    const location = {
        hash: false,
        search: "token",
      };
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>    
        <HomeView location={location}/>
    </BrowserRouter>
    ,div)
})

it("matches snapshot correctly", () => {
    const location = {
        hash: false,
        search: "token",
      };
    const tree = renderer.create(
        <BrowserRouter>
        <HomeView location={location} />
      </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
})

it("renders component when logged in",()=>{
    const location = {
        hash: "http://localhost:3000/#access_token=sgEBpq4r_7Q5pmAEflEWnx4OrnkFBTk3&scope=openid%20profile%20email&expires_in=7200&token_type=Bearer&state=UdjDtPX6f5kJyqg6cVVTDaozYiSlQF2X&id_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IndsZ2Zra0Z6bGhJUmVPbm5EMjU3biJ9.eyJnaXZlbl9uYW1lIjoiTHVxbWFhbiIsImZhbWlseV9uYW1lIjoiU2hhaWsiLCJuaWNrbmFtZSI6Imx1cW1hYW4uc2hhaWsiLCJuYW1lIjoiTHVxbWFhbiBTaGFpayIsInBpY3R1cmUiOiJodHRwczovL2xoNS5nb29nbGV1c2VyY29udGVudC5jb20vLU5FODM1RE9fTEZrL0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFBL0FNWnV1Y2tPM2Y3RlFOLWdrcjdPTWxoOUpDYk9ab251Qmcvczk2LWMvcGhvdG8uanBnIiwibG9jYWxlIjoiZW4iLCJ1cGRhdGVkX2F0IjoiMjAyMS0wMS0yN1QwNTo1MDoyNS42MjdaIiwiZW1haWwiOiJsdXFtYWFuLnNoYWlrQHplbW9zb2xhYnMuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOi8vZGV2LXU0Mmd2cjduLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDEwNTMyNzQ0ODM0MDUxMTY5MTExOCIsImF1ZCI6ImlCUE9KU3p3NHR3Nm1sN3JObmhzRVZudmRZQXBWNHVVIiwiaWF0IjoxNjExNzI2NjI1LCJleHAiOjE2MTE3NjI2MjUsImF0X2hhc2giOiIyazVDbG9JUjZ2ZGVFTmJnZWFLZmN3Iiwibm9uY2UiOiJSakMuNGNVVDV0X0o2dWtYVTYweTZxMTNNRzlwUkE3RyJ9.PVqybnnvAdS-0sxf8_NU8PHs-flFJxFGPNp2qDI1m7FVP2rmzw3G3JiJsVq4ZLD1LoK4uw1OWHmVUGbkt6hHpKNyDWSiJpM-3-GHaakpCgBf05eb-wl2cAVegUHGAwcTmkJu6SREbzwtYOjpQ4yAIJ5YQDqSJf6B4f45VvVzqcrzrTejGLfrHD9_LDRe0R9k00alPaQ9k3_8mi_ncvIC4V4FkeQRSmWwWlfxWkGJ0NEcA2oxq9uPYLoGIZ9l2SEeWTe2jqjqB3DObKeytJF_YlHVs7pCXcV-f1ZbnnH9-poMKSmsgBB1oQKtfehs6OOJOnlrKAr-c1KVnAv9zHpicA",
        search: "http://localhost:3000/#access_token=sgEBpq4r_7Q5pmAEflEWnx4OrnkFBTk3&scope=openid%20profile%20email&expires_in=7200&token_type=Bearer&state=UdjDtPX6f5kJyqg6cVVTDaozYiSlQF2X&id_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IndsZ2Zra0Z6bGhJUmVPbm5EMjU3biJ9.eyJnaXZlbl9uYW1lIjoiTHVxbWFhbiIsImZhbWlseV9uYW1lIjoiU2hhaWsiLCJuaWNrbmFtZSI6Imx1cW1hYW4uc2hhaWsiLCJuYW1lIjoiTHVxbWFhbiBTaGFpayIsInBpY3R1cmUiOiJodHRwczovL2xoNS5nb29nbGV1c2VyY29udGVudC5jb20vLU5FODM1RE9fTEZrL0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFBL0FNWnV1Y2tPM2Y3RlFOLWdrcjdPTWxoOUpDYk9ab251Qmcvczk2LWMvcGhvdG8uanBnIiwibG9jYWxlIjoiZW4iLCJ1cGRhdGVkX2F0IjoiMjAyMS0wMS0yN1QwNTo1MDoyNS42MjdaIiwiZW1haWwiOiJsdXFtYWFuLnNoYWlrQHplbW9zb2xhYnMuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOi8vZGV2LXU0Mmd2cjduLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDEwNTMyNzQ0ODM0MDUxMTY5MTExOCIsImF1ZCI6ImlCUE9KU3p3NHR3Nm1sN3JObmhzRVZudmRZQXBWNHVVIiwiaWF0IjoxNjExNzI2NjI1LCJleHAiOjE2MTE3NjI2MjUsImF0X2hhc2giOiIyazVDbG9JUjZ2ZGVFTmJnZWFLZmN3Iiwibm9uY2UiOiJSakMuNGNVVDV0X0o2dWtYVTYweTZxMTNNRzlwUkE3RyJ9.PVqybnnvAdS-0sxf8_NU8PHs-flFJxFGPNp2qDI1m7FVP2rmzw3G3JiJsVq4ZLD1LoK4uw1OWHmVUGbkt6hHpKNyDWSiJpM-3-GHaakpCgBf05eb-wl2cAVegUHGAwcTmkJu6SREbzwtYOjpQ4yAIJ5YQDqSJf6B4f45VvVzqcrzrTejGLfrHD9_LDRe0R9k00alPaQ9k3_8mi_ncvIC4V4FkeQRSmWwWlfxWkGJ0NEcA2oxq9uPYLoGIZ9l2SEeWTe2jqjqB3DObKeytJF_YlHVs7pCXcV-f1ZbnnH9-poMKSmsgBB1oQKtfehs6OOJOnlrKAr-c1KVnAv9zHpicA",
      };
      localStorage.setItem(
        "id_token",
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IndsZ2Zra0Z6bGhJUmVPbm5EMjU3biJ9.eyJnaXZlbl9uYW1lIjoiTHVxbWFhbiIsImZhbWlseV9uYW1lIjoiU2hhaWsiLCJuaWNrbmFtZSI6Imx1cW1hYW4uc2hhaWsiLCJuYW1lIjoiTHVxbWFhbiBTaGFpayIsInBpY3R1cmUiOiJodHRwczovL2xoNS5nb29nbGV1c2VyY29udGVudC5jb20vLU5FODM1RE9fTEZrL0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFBL0FNWnV1Y2tPM2Y3RlFOLWdrcjdPTWxoOUpDYk9ab251Qmcvczk2LWMvcGhvdG8uanBnIiwibG9jYWxlIjoiZW4iLCJ1cGRhdGVkX2F0IjoiMjAyMS0wMS0yN1QwNTo1MDoyNS42MjdaIiwiZW1haWwiOiJsdXFtYWFuLnNoYWlrQHplbW9zb2xhYnMuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOi8vZGV2LXU0Mmd2cjduLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDEwNTMyNzQ0ODM0MDUxMTY5MTExOCIsImF1ZCI6ImlCUE9KU3p3NHR3Nm1sN3JObmhzRVZudmRZQXBWNHVVIiwiaWF0IjoxNjExNzI2NjI1LCJleHAiOjE2MTE3NjI2MjUsImF0X2hhc2giOiIyazVDbG9JUjZ2ZGVFTmJnZWFLZmN3Iiwibm9uY2UiOiJSakMuNGNVVDV0X0o2dWtYVTYweTZxMTNNRzlwUkE3RyJ9.PVqybnnvAdS-0sxf8_NU8PHs-flFJxFGPNp2qDI1m7FVP2rmzw3G3JiJsVq4ZLD1LoK4uw1OWHmVUGbkt6hHpKNyDWSiJpM-3-GHaakpCgBf05eb-wl2cAVegUHGAwcTmkJu6SREbzwtYOjpQ4yAIJ5YQDqSJf6B4f45VvVzqcrzrTejGLfrHD9_LDRe0R9k00alPaQ9k3_8mi_ncvIC4V4FkeQRSmWwWlfxWkGJ0NE"
      );  
      const tree = renderer
      .create(
        <BrowserRouter>
          <HomeView location={location} />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders component when not logged in",()=>{
    const location = {
        hash: false,
        search: "http://localhost:3000/?login",
      };
    localStorage.removeItem("id_token"); 
    const tree = renderer.create(
        <BrowserRouter>
        <HomeView location={location} />
      </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot(); 
  })
