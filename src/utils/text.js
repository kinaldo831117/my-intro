// 데이터 파일의 \n 을 화면의 줄바꿈(<br>)으로 바꿔 줍니다.
export const lines = (text = "") => text.replace(/\n/g, "<br />");
