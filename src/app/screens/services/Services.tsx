import "../../styles/styles.css";

const storiesData = [
  {
    id: 1,
    media: `<svg fill="#fcc881" height="4em" width="4em" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><path d="M161.5,512c-4.4-3-9.8-3.6-14.1-6.7c-9.2-6.5-14.6-15.2-17-26.1c-11.9-52.4-23.9-104.7-35.7-157.1  c-0.5-2.4-1.5-4.4-2.7-6.4c-20.7-33.4-34-69.5-38.9-108.5c-2.8-22.5-4.3-45.2,2.4-67.4C67.2,100.8,92,73.5,130,59  c29-11.1,58.3-10.6,87.2,0.8c14.1,5.6,28.5,9,43.8,8.1c11.6-0.7,22.4-4.4,33.3-8.2c48.4-17.2,92-8.7,129.4,26.4  c25.4,23.9,37.1,54.5,36.7,89.3c-0.6,50.8-14.6,97.7-41.3,140.9c-4.3,6.9-4.5,15.2-6.3,22.9c-10.7,46.5-21.3,93-31.8,139.6  c-4,17.8-14.5,29.1-32.8,32.5c-0.2,0-0.3,0.5-0.5,0.8c-4.3,0-8.7,0-13,0c-1-1.7-2.9-1.4-4.3-1.8c-15.5-5.1-24.5-15.9-27.7-31.7  c-1.6-7.8-2.7-15.7-4-23.6c-7.1-42.7-14.2-85.4-21.3-128c-0.7-4.3-2.1-8.4-5.1-11.8c-6.1-6.8-13.7-9.5-22.5-6.9  c-10,2.9-14.5,10.3-16.1,20.2c-8,48.9-16.2,97.8-24.3,146.8c-2.2,13.1-7.7,23.9-19.3,31.2c-4.8,3-10.3,4-15.5,5.8  C170.2,512,165.9,512,161.5,512z M443.2,177.3c0.6-20.2-3.6-39.4-14.1-56.8c-27.5-45.6-79-63.5-128.8-44.8  c-12.4,4.6-24.8,8.5-38.1,9.3c-17.8,1.1-34.7-2.7-51.1-9.3c-17.9-7.2-36.3-8.9-55.4-6c-40,6.2-74.1,37.2-84.3,76.4  c-5.1,19.8-3.8,39.7-1.3,59.5c4.7,36.8,17.3,70.9,37.1,102.3c1.9,3,3.2,6.1,4,9.6c4.7,21.1,9.5,42.2,14.3,63.2  c7.3,32.1,14.6,64.2,21.9,96.3c2,8.7,7.5,14.5,15.9,16.9c14,4,26.1-4.5,28.8-20.4c5.6-32.8,10.9-65.7,16.4-98.5  c3.2-18.9,5.4-37.9,9.9-56.5c4-16.9,19.9-28.4,37.7-28.4c16.5,0,32.5,11.9,36.3,28.3c5.3,22.7,8.1,45.9,12,68.8  c5.1,29.7,9.9,59.4,15,89.1c1.6,9.3,7.5,15.5,16.8,17.8c13.3,3.3,24.6-4.6,28-19.4c10.8-47.7,21.7-95.3,32.3-143.1  c2.7-12.3,6.4-23.9,13.5-34.5c5.2-7.7,8.9-16.3,12.6-24.9C435.7,241.9,442.6,210.3,443.2,177.3z"></path>	<path d="M-0.5,39.9c2.3-3.4,5.3-5.3,9.5-6.4C21.8,30.2,29.8,21.8,33.3,9c0.4-1.3,0.6-2.6,1.1-3.8C35.9,1.8,38.5,0,42.2,0  c3.7,0,6.4,1.8,7.7,5.3c0.9,2.3,1.3,4.8,2.2,7.1C56.4,23.8,64.5,31,76.4,33.8c4.2,1,7.5,2.8,8.2,7.5c0.7,4.9-1.6,8.3-7.2,9.7  c-14.5,3.5-23.4,12.4-26.8,27c-1,4.4-3.6,7-8.3,7.1c-4.7,0-7.5-2.7-8.5-7C30.4,63.2,21.4,54.1,6.6,51c-3.2-0.7-4.8-3.3-7.1-5.1  C-0.5,43.9-0.5,41.9-0.5,39.9z M54.3,42.5c-3.9-3.3-7.5-6.2-10.2-10c-1.3-1.9-2.4-1.9-3.7,0c-2.6,3.9-9.3,6.8-9.1,9.8  c0.3,3.7,6,6.8,9.1,10.4c1.5,1.7,2.4,1.8,3.7,0C46.7,48.7,50.5,45.9,54.3,42.5z"></path>	<path d="M468.6,358.5c5.6,0.3,8,3.5,9,8.1c1.4,6.5,4.4,12.2,9.1,16.8c4.5,4.4,9.8,7.3,16,8.6c4.7,1,8.5,3.2,8.7,8.7  c0.2,4.5-2.6,7.6-8.4,9c-13.8,3.4-22.1,12.1-25.5,25.7c-1.5,5.9-4.8,8.6-9.7,7.9c-4.2-0.6-6.5-3.2-7.4-7.1  c-3.4-14.5-12.2-23.5-26.8-26.9c-4.3-1-7.1-3.5-7.2-8.3c0-4.7,2.5-7.5,6.9-8.5c14.9-3.5,24-12.7,27.3-27.7  C461.6,360.8,464.6,358.6,468.6,358.5z M469,388.8c-3.3,4-6.4,7.7-10.3,10.6c-1.3,0.9-1.9,1.8-0.2,3.1c4,2.9,7.1,6.9,10.5,10.6  c3.2-3.7,6-7.5,9.9-10.1c2.3-1.5,1.8-2.7-0.1-4C475,396.4,472.2,392.8,469,388.8z"></path>	<path d="M101.9,170.7c-8.9,0-9,0-8.2-7.7c2.2-23.1,12.3-41.5,32.5-53.8c1-0.6,2-1.2,3-1.7c13.4-6.6,14.3-6.1,16.5,8.7  c0.3,2.2,0.2,3.1-2.1,4c-20.1,7.3-30.3,22.3-32.8,43C109.9,170.7,109.9,170.7,101.9,170.7z"></path>	<path d="M161.6,110.9c0-8.7,0-8.7,8.9-8.7c8.2,0,8.2,0,8.2,8c0,9.2,0,9.2-8.9,9.2C161.6,119.3,161.6,119.3,161.6,110.9z"></path></g></svg>`,
    title: "TOP NOTCH COMPOSITE VENEERS",
  },
  {
    id: 2,
    media: `<svg fill="#fcc881" height="4em" width="4em" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><path d="M250.9,350.2c-2.8-21.1-1.5-42,2.3-62.9c0.4-2.1,0.9-3.6-2.4-2.9c-3.5,0.7-5.8-1.2-6.8-4.6c-1.3-4.4-3.3-8.5-5.7-12.4  c-2.1-3.4-1.6-6.6,1.9-8.8c3.3-2,6.2-0.8,8.3,2.2c2.9,4.2,4.9,8.8,6.8,13.6c1.9-1,1.8-2.9,2.4-4.3c10-24.2,39.2-39.8,63.6-34  c12.8,3.1,21.5,11.1,26.7,23.1c1.9,0.1,2.3-1.7,3.2-2.8c11.8-13.8,26.7-21.3,44.9-21.4c15-0.1,25.8,6.2,30.1,22  c7.8-10.6,17.4-17.7,29.7-21c15.8-4.2,31.2,2.3,36,17.2c0.1,0.4,0.5,0.8,1,1.5c7.8-22.5,9.7-44.9,1.9-67.5  c-8.1-23.6-26-33-49.5-34.6c-32-2.2-62.9,3.7-93.5,11.8c-21.2,5.6-41.7,12.9-61.9,21.4c-22.9,9.6-45.9,9.7-68.7,0  c-31.6-13.4-64.2-23.7-98.1-29.5c-21-3.6-42-5.5-63.4-3c-24.4,2.9-39,16.4-45.2,39.7c-5.6,20.9-3.4,41.3,3.7,61.6  c1.7-1.3,1.7-3.1,2.4-4.6c5.8-12.1,19.2-17.9,33.7-14.3C67,238.9,77.1,246,85,257.1c2.7-9.1,7.3-16.1,16.1-19.5  c9.3-3.5,18.7-3.1,28.1-0.7c12,3,22.1,9.5,30.1,18.9c1.1,1.2,2.1,2.5,3.4,4.1c1.7-3,3.1-5.6,4.6-8.2c2.1-3.4,5.2-4.7,8.6-2.6  c3.5,2,4,5.4,1.9,8.8c-2.5,3.9-4,8.2-5,12.7c-1.1,5-5,5.6-9.8,4.2c-6.6-1.9-9.7-7.1-13.7-11.6c-9.8-11.1-22.2-16.4-37.1-15.6  c-7.5,0.5-12.7,3.9-15,11.5c-5.1,17-5.6,34.5-5.5,52c0,4.9,0.6,9.8,0.9,14.8c0.3,5.9,3.2,9.8,8.9,11.6c2.2,0.7,4.4,1.5,6.7,2.4  c1.1-7.8,1.9-15.2,3.3-22.5c3.7-19.3,18.6-32.7,38.1-34.7c4.6-0.5,9.3,0.7,13.6-2.3c1.6-1.1,4.4-0.6,5.5,1.3c1.9,3.2,5,3.7,8,4.8  c21.3,7.9,35.3,22.8,40.7,44.8c5.9,24,7.9,48.6,5.6,73.4c-1.6,16.8-7.3,23.1-24.1,24.3c-22.9,1.7-45.9,0.9-68.5-3.5  c-12.8-2.5-21-12.3-21.7-25.4c-0.8-14.4-1.4-28.9-0.9-43.3c0.1-2.9-0.2-5-3.7-5.2c-1.1-0.1-2.3-0.7-3.4-1.1  c-5.5-1.9-9.9-7.4-15.1-7.9c-5.3-0.6-11.2,1.5-17,1.3c-9.9-0.3-19.5-2.2-29-4.8c-14.7-4-22.1-13.2-22.7-28.5  c-0.4-9.7-1.6-19.3-1.2-29c0.1-2.9-1.2-5.2-2.4-7.6C0.7,248.5-4.8,222,1.6,193.9c7.7-33.5,29-51.2,63.3-53.5  c34.1-2.3,66.9,4.1,99.5,12.8c21.6,5.8,42.6,13.5,63.3,22c19,7.8,38.1,7.5,57-0.4c33.1-14,67.2-24.5,102.5-30.7  c21.8-3.8,43.8-6,65.9-2.8c31.3,4.6,49.3,21,56.4,51.9c6.5,28.3,1.2,54.9-11.5,80.4c-1.6,3.3-2.6,6.4-2.5,10.1  c0.2,12.4-0.7,24.8-3.1,37c-1.2,6-4.3,10.4-9.5,13.1c-17.3,8.9-35.6,11.8-54.8,8.8c-1.4-0.2-2.7-1.1-4.3,0.2  c-11.6,9.1-25.5,11.4-39.6,13c-11.8,1.4-23.7,2.3-35.3-1.7c-1.1-0.4-1.9-0.4-2.7,0.6c-5,6.2-12,7.9-19.3,8.9  c-19.6,2.8-39.2,3.7-58.9,1.5c-4.8-0.5-8.8-4.4-12.9-5.2c-3.1-0.6-7,4.8-11.8,5.3c-3.9,0.5-7.8,1-11.7,0.8  c-3.3-0.1-5.3-2.1-5.7-5.4c-0.4-3.4,1.4-6.3,4.5-6.4c6.7-0.3,13-2.4,19.5-2.9c0.4,0,0.8,0.1,1.2,0.1  C251.1,351,251,350.6,250.9,350.2z M119.8,368.6c-0.3,6.2,0.6,18.4,1.3,30.6c0.4,7.9,5.1,13.1,13.2,14.5c21.4,3.6,42.9,4.4,64.4,3  c8.7-0.6,11.2-3.2,12.1-11.8c2.2-22.2-0.1-44-3.9-65.8c-4.5-26.6-26.3-41.6-46.9-44.1c-19.5-2.4-34.3,8.7-37.1,28.1  C121.1,336.1,120.2,349.3,119.8,368.6z M340.2,311.7c0.9-13.9,0.2-27.8-1.9-41.6c-1.9-12-11.1-21.3-22.4-22.5  c-21.8-2.3-43,11.5-48.5,32.8c-5.4,20.7-7.1,41.8-4.7,63.2c0.8,7.8,2.7,9.4,10.7,9.9c18.7,1,37.4,0.7,55.9-2.8  c7-1.3,10.8-5.3,11-12.5C340.3,329.3,340.2,320.5,340.2,311.7z M419.5,305.5c-0.4-14.3-1-27.2-3.8-39.9  c-3.5-15.6-10.8-20.6-26.7-17.8c-1.2,0.2-2.3,0.5-3.5,0.8c-16.6,4-35.3,18.8-33,43.2c1.5,15.6,0.6,31.2-0.3,46.8  c-0.2,2.6,0.2,4.3,3,4.7c19.9,2.8,39.2,0.7,57.7-7.7c2.8-1.3,4.3-3.5,4.9-6.6C419.3,320.8,419.2,312.4,419.5,305.5z M28,286.3  c0.1,9.7,0.7,19.3,2.1,28.9c0.7,5,3,8,7.5,9.8c12.8,5.2,26.1,7.2,39.8,6.2c3.1-0.2,3.9-1.3,3.5-4.5c-1.5-12-2-24-1-36.1  c0.4-4.9,1.7-9.8,0.3-14.7c-4.2-14.5-13.6-24.1-28.1-28.2c-11.7-3.3-19.4,1.7-22.2,13.6C27.9,269.6,28.1,278,28,286.3z   M432.1,304.8c-0.5,6.8-1,14.6-1.8,22.4c-0.3,2.5,0.1,3.8,2.9,4c14.5,1.2,28.4-0.9,41.7-6.8c3.8-1.7,5.5-4.5,6.2-8.6  c2-12.3,2.4-24.7,2.1-37.1c-0.1-6.6-0.6-13.2-2.3-19.7c-2-7.4-6.3-11.3-13.5-11.8c-21.1-1.7-39.1,21.8-36.6,36.2  C431.9,290.1,431.7,297,432.1,304.8z"></path>	<path d="M365.4,450.9c-2.5,0-4.9-1.1-6.7-3.4c-0.7-0.9-1.5-1.9-1.9-3c-3.7-9.8-10.7-16.3-20.2-20.2c-0.5-0.2-0.9-0.4-1.3-0.7  c-7.1-4.4-7.4-13,0.2-16.5c10.2-4.8,17.3-11.7,22.1-21.9c3.6-7.8,12.9-7.7,16.6,0.1c4.7,10,11.6,17,21.6,21.7  c8.2,3.9,8.1,13.1-0.1,16.9c-10.1,4.7-17.2,11.6-21.5,21.8C372.8,449.1,369.8,450.9,365.4,450.9z M365.9,394.4  c-4.3,10.4-11,16.6-20.5,21c9.7,4.1,16.2,10.5,20.4,20.6c4.3-10.2,10.9-16.4,20.4-20.7C376.7,411,370.1,404.9,365.9,394.4z"></path>	<path d="M309.8,140.3c-3.9-0.2-6.7-2.1-8.1-5.5c-2.7-6.5-7.4-10.5-13.5-13.7c-7.4-3.8-7.5-11.6-0.1-15.3c6.4-3.2,10.7-7.7,13.9-14  c3.6-7.1,11.4-7.2,15-0.1c3.3,6.5,7.8,11,14.4,14.3c7.1,3.6,6.9,11.4-0.3,15.1c-6.4,3.2-11.1,7.5-13.9,14  C315.9,138.3,313.2,140,309.8,140.3z M309.5,103.3c-2.6,4.8-5.9,7.7-10,10.2c4.4,2.6,7.4,5.8,10.1,10c2.6-4.6,6-7.4,9.8-10.2  C315.2,110.8,312.2,107.7,309.5,103.3z"></path>	<path d="M97.9,388.1c0,5.7-2.1,8.3-5.5,9.7c-6.2,2.6-10.3,7.1-13.3,13.2c-4,7.9-11.9,7.9-15.8-0.1c-3-6.1-7.4-10.1-13.3-13.3  c-7.7-4-7.6-11.5,0.1-15.5c5.9-3.1,10.2-7.2,13.3-13.3c3.9-7.9,11.9-7.8,15.9,0.1c3,6.1,7.2,10.5,13.4,13.1  C95.9,383.5,97.9,386.1,97.9,388.1z M81.3,389.8c-4.5-2.5-7.4-5.8-10.3-10c-2.4,4.7-5.8,7.5-9.6,10.1c4,2.5,7.2,5.7,9.9,9.9  C73.8,395.5,77.1,392.4,81.3,389.8z"></path>	<path d="M218.3,238.2c6.5,1.9,13.2,5.1,18.5,10.5c2.1,2.1,1.6,5.1-0.4,7.4c-2.1,2.4-5,2.8-7.4,1.3c-4.7-3-9.6-5.6-14.7-8  c-2.8-1.3-3.4-4.1-2.6-7C212.6,239.7,214.6,238.3,218.3,238.2z"></path>	<path d="M198.5,235.2c1.2,0,2.4-0.1,3.5,0c3.3,0.3,5.3,2.1,5.7,5.4c0.4,3.6-1.6,6.2-4.9,6.5c-5.4,0.5-10.6,1.2-15.9,2.8  c-3.1,0.9-5.7-0.6-6.8-3.8c-1.1-3.3-0.1-6.2,3.2-7.6C188.1,236.4,193.2,235.2,198.5,235.2z"></path>	<path d="M250.9,350.2c0.1,0.4,0.2,0.7,0.3,1.1c-0.4,0-0.8-0.1-1.2-0.1C250.3,350.9,250.6,350.6,250.9,350.2z"></path></g></svg>`,
    title: "PORCELAIN VENEERS",
  },
  {
    id: 3,
    media: `<svg fill="#fcc881" height="4em" width="4em" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><path d="M506.8,291.4c-1,4.8-8.7,6.6-14.1,6.5c-12.8-0.3-25.5,0-38.3-0.2c-2.8,0-3.8,0.5-4.3,3.6c-6,36.1-20.3,68.6-43.5,97  c-21.9,26.9-48.9,47.2-81.1,60.6c-26.4,11-53.7,16.1-82.2,14.2c-22.3-1.5-43.6-7.4-64-16.6c-24.1-10.9-45.2-26-63.7-44.8  c-6.3-6.4-12.1-13.2-17.5-20.5c-3.9-5.3-3.4-11.2,1-14.2c4.4-3,9.6-1.7,13.5,3.5c29.9,39,68.7,64,117.1,73.1  c29.9,5.6,58.9,1.2,86.7-10.3C363,424,396.7,391.4,418,346c6.4-13.7,10.6-28.3,13.8-43.1c0.8-3.6,0.6-5.4-4.1-5.3  c-11.9,0.4-23.9,0-35.8,0.2c-4.3,0.1-7.8-0.8-10-4.7c-2.3-4.1-1.1-7.8,1.3-11.5c16.4-24.9,32.8-49.8,49.2-74.7  c1-1.5,1.8-3.1,2.9-4.6c5.1-7.5,12.4-7.5,17.3,0c8.2,12.4,16.3,24.8,24.5,37.2c9,13.8,18,27.6,27.1,41.3  C504.8,282,506.8,284.3,506.8,291.4z M481.6,279.9c-12.7-19.3-25-38-37.7-57.3c-12.7,19.3-25,38-37.6,57.3  C431.7,279.9,456.3,279.9,481.6,279.9z"></path>	<path d="M4.2,228.9c4.3-3.7,9.3-4.5,14.9-4.4c12.4,0.3,24.9,0,37.3,0.2c3,0,4-0.7,4.5-3.9c5.4-32.3,17.4-62.1,37.2-88.3  c36.6-48.3,84.6-77.4,145.6-82.6c40-3.5,76.5,8,110.5,28.5c23,13.9,42.5,31.8,58.6,53.4c3.9,5.3,3.6,10.4-0.8,13.7  c-4.3,3.2-9.7,2.2-13.6-3c-10.4-13.7-22.2-26.1-35.9-36.6c-28.2-21.5-59.6-35.6-95.3-38.2c-43.6-3.2-82,10.9-116.3,36.8  c-35.3,26.7-58.2,62-69.3,104.8c-1,3.9-1.6,8-2.5,11.9c-0.6,2.7,0.2,3.6,3.1,3.6c12.1-0.2,24.2,0,36.3-0.1  c4.6-0.1,8.5,0.8,10.8,5.1c2.1,4.1,0.7,7.8-1.7,11.4c-17.2,26.1-34.6,52.1-51.3,78.6c-4.7,7.4-13.1,8.4-18.9-0.6  c-17.1-26.8-34.7-53.2-52.2-79.8c-0.2-0.3-0.7-0.4-1.1-0.6C4.2,235.4,4.2,232.1,4.2,228.9z M29.7,243.1  c12.6,19.2,24.9,37.9,37.4,57c12.6-19.2,24.9-37.8,37.4-57C79.4,243.1,55.1,243.1,29.7,243.1z"></path>	<path d="M352.5,216.7c-1.2,16.4-4.8,34.3-9.7,51.8c-8.6,30.9-21,60.2-37.9,87.6c-3.1,5.1-7.4,7.6-12.9,7.1c-5.8-0.5-9.8-4-11.4-9.9  c-3.3-12.1-6.4-24.3-13.7-34.9c-3.1-4.4-6.3-8.7-10-12.6c-2-2.1-3.1-1.9-4.9,0.1c-9.9,11.1-16,24.1-19.4,38.4  c-0.7,2.9-1.4,5.7-2.1,8.5c-1.4,5.5-4.8,8.9-10.4,9.7c-5.6,0.8-10.4-0.8-13.5-5.9c-12.1-19.6-22-40.3-29.9-62  c-7.5-20.5-12.8-41.6-16.5-63.2c-2.9-17.3-3.1-34.2,7.9-49.2c12.5-17,29.4-24.7,50.6-22.7c5.4,0.5,9.8,3.6,14,6.6  c5.2,3.8,10.1,4.6,16.7,2.9c14.3-3.8,28.6-7.9,43.4-9.5C326.1,156.4,353.1,181.4,352.5,216.7z M216,337.4  c4.2-17.5,12.4-31.7,23.5-44.5c7.4-8.5,18.2-10.3,25.9-3.5c7.6,6.7,14,14.6,19.1,23.4c4.4,7.6,7.7,15.7,10.3,24.9  c2.5-4.4,4.5-7.9,6.4-11.5c15-29.7,25.7-60.9,31.1-93.7c1.5-9.1,3.6-18.2,1.4-27.6c-4.7-19.6-25.9-32.3-43.7-26.1  c3.4,7.5,1.1,13.8-5.7,15c-3.8,0.7-7.8,0.9-11.7,1.1c-19.4,0.9-37.2-3.9-53-15.4c-1.9-1.4-3.8-2.2-6.3-2.3  c-22-0.7-40.1,19.9-36.8,41.7c2.5,17.1,5.7,33.9,10.6,50.5C194.1,292.7,203.3,315.1,216,337.4z"></path></g></svg>`,
    title: "ALL-ON-4- IMPLANTS",
  },
  {
    id: 4,
    media: `<svg fill="#fcc881" height="4em" width="4em" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><path d="M363.1,7.3c0.2,0.8,0.8,0.8,1.5,0.9c33,6.6,55.6,32.6,56.2,66.3c0.5,28.2,0.5,56.5-0.3,84.8c-0.7,22-6,43.3-14.1,63.9  c-1.3,3.2-1.5,4.4,2.6,5.2c17.2,3.5,26.6,15.3,26.6,32.9c0,69.8,0,139.5,0,209.3c0,14.1-6,24.4-18.8,30.5  c-3.5,1.7-7.3,2.4-11.2,2.4c-98,0-196,0-294,0c-15,0-28.7-12.1-29.7-27.1c-0.8-10.9-0.4-21.9-0.3-32.9c0-4.3,3.5-7.2,7.5-7.2  c4,0,7.3,3,7.4,7.3c0.2,8.4,0,16.8,0.1,25.2c0,13.3,6.6,19.8,19.9,19.8c94.8,0,189.6,0,284.3,0c13,0,19.7-6.6,19.7-19.5  c0-68.8,0-137.6,0-206.4c0-13-7-19.8-19.7-19.6c-2.5,0-3.8,0.8-4.8,3c-2,4.2-4.2,8.4-6.5,12.4c-5.3,9.5-13.8,13.6-24.4,13.7  c-0.5,0-1,0-1.5,0c-9.3,0-9.3,0-9.8,9.3c-0.6,10.4-10.6,19.7-21.4,19.8c-7.6,0.1-7.5,0.1-7.7,7.6c-0.1,4.4,0.2,7.7,5.1,10.5  c8.4,4.8,11.5,15.5,8.6,24.5c-3.1,9.7-11.2,15.6-21.4,15.6c-6.7,0-6.4,0-6.8,6.6c-0.3,5.4,0.8,8.8,5.9,12  c8.2,5.1,10.7,15.7,7.5,24.9c-3.1,8.9-11.4,14.9-21.1,14.6c-4.7-0.2-7.1,0.5-8.6,5.8c-4.4,15.1-18.4,24-34.9,23.4  c-14.1-0.6-27.4-11.6-30.6-26c-0.9-4.1-3.4-3.1-5.7-3.1c-11.9-0.1-20-5.2-23.3-15c-3.2-9.5,0.1-20.2,8.7-25.4  c3.9-2.4,5-4.8,4.8-9.1c-0.3-8.5-0.1-8.5-8.6-8.7c-9.1-0.2-17.2-7.1-20-16.8c-2.5-8.6,1.6-18.6,9.5-24c1.6-1.1,4.5-0.8,4.5-3.7  c0-4.2,0.5-8.5-0.3-12.5c-0.4-2.1-3.7-0.9-5.7-1c-11.3-0.1-19.3-6.1-22.5-16.9c-0.5-1.6-0.5-3.2-0.5-4.8c-0.1-7.5,0-7.5-7.8-7.5  c-4.8,0-9.7,0.3-14.5-0.4c-9.6-1.4-16.4-7-20.7-15.7c-0.9-1.7-1.5-3.6-2.6-5.2c-1.9-2.7-1.5-7.5-6.1-7.8c-6.5-0.5-12.6,0.8-17,6.2  c-3.3,4.1-3.9,9-3.9,14.1c0,47.5,0,95,0,142.4c0,1.8,0.1,3.6-0.2,5.3c-0.7,4-3.3,6.3-7.4,6.3c-4,0-6.7-2.2-7.4-6.2  c-0.3-1.6-0.2-3.2-0.2-4.8c0-48,0.3-95.9-0.2-143.9c-0.2-18.1,10.5-31.7,27.9-34.5c3-0.5,2.9-1.4,2-3.7c-11-27.4-15.6-56-15.1-85.5  c0.3-20.7-0.1-41.3,0.1-62c0.2-34,21-60.1,54-68.3c1-0.2,2.4,0.1,2.9-1.3c7.8,0,15.5,0,23.3,0c2.5,1.9,5.7,1.5,8.5,2.4  c14,4.4,26.3,12.2,38.6,19.6c22.4,13.4,44.5,15.3,67.4,1.5c9.6-5.8,19.8-10.8,29.6-16.3c6.2-3.5,13.2-4.6,19.6-7.2  C347.6,7.3,355.4,7.3,363.1,7.3z M258.5,256.9c34.9,0,69.7-0.1,104.6,0c7.1,0,12.1-2.5,14.6-9.4c0.9-2.4,2.2-4.7,3.4-6.9  c14-25.1,22.5-52.1,23.7-80.8c1.3-29.7,0.5-59.4,0.4-89.1c0-3.5-1-7-2-10.4c-10.5-33.6-47.6-47.8-79.2-30.4  c-11.3,6.2-22.5,12.6-33.9,18.5C279.5,54,267.9,56.3,256,56c-14.7-0.4-27.7-6.3-40.4-13.4c-11.5-6.4-22.5-13.9-35.2-18  c-33.1-10.7-68.9,15.3-68.9,50.1c0,26-0.2,52,0.1,78c0.2,19.1,4.1,37.6,10.1,55.8c4.4,13.5,11.1,26,17.3,38.8  c3.3,6.9,8,9.8,15.4,9.7C189.1,256.8,223.8,256.9,258.5,256.9z M237.4,286.1c14.7,0,29.4,0,44,0c6.3,0,9.4,2.7,9.3,7.8  c-0.1,4.9-3.2,7.3-9.3,7.3c-19.7,0-39.4,0-59.1,0c-9.2,0-9,0-9.3,9.4c-0.1,4,1.3,4.7,4.9,4.7c26.1-0.1,52.3-0.1,78.4-0.1  c4.2,0,9.7,1.4,12.1-0.7c2.8-2.5,0.9-8.2,0.9-12.5c0.1-15.9,0-15.9,15.8-15.9c3,0,6.1,0.6,9-0.8c3.5-1.7,5.5-6.7,4.2-11.3  c-1-3.5-4.1-1.6-6.1-1.6c-47.4-0.1-94.9-0.1-142.3-0.1c-1.1,0-2.3,0.1-3.4,0c-1.8-0.1-2.5,0.5-2.6,2.4c-0.8,8.1,2.2,11.5,10.2,11.5  C208.7,286.1,223,286.1,237.4,286.1z M261.3,344.2c18.1,0,36.1,0,54.2,0c5,0,8.4-2.8,8.5-6.8c0.1-3.9-3.3-7.1-8.2-7.1  c-36.3-0.1-72.5,0-108.8,0c-2.9,0-5.4,0.8-7,3.4c-1.4,2.2-1.6,4.5-0.2,6.8c1.8,3,4.6,3.7,7.8,3.7  C225.5,344.2,243.4,344.2,261.3,344.2z M261.2,402.4c13.1,0,26.1,0,39.2,0c3,0,5.8-0.5,7.7-3.1c1.4-2.1,1.9-4.3,0.6-6.8  c-1.8-3.3-4.7-4.1-8.1-4.1c-25.9,0-51.9,0-77.8,0c-5.8,0-9.3,2.7-9.4,6.9c-0.1,4.2,3.6,7,9.2,7  C235.4,402.4,248.3,402.4,261.2,402.4z M261.1,373.3c8.2,0,16.5,0,24.7,0c9.2,0,9,0,9.3-9.4c0.1-4-1.3-4.7-4.9-4.7  c-17.4,0.2-34.9,0.1-52.3,0.1c-10.4,0-10.3,0-10.2,10.3c0,3.1,1.1,3.7,3.9,3.7C241.4,373.2,251.3,373.3,261.1,373.3z M279.5,417.5  c-11.5,0-22.6,0.1-33.7,0c-3.6,0-2.1,1.8-1.4,3.3c3.8,7,9.6,10.7,17.6,10.6C269.7,431.3,276.3,426,279.5,417.5z"></path></g></svg>`,
    title: "DENTAL IMPLANTS",
  },
  {
    id: 6,
    media: `<svg fill="#fcc881" height="4em" width="4em" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g>	<path d="M415.8,74.8c0.1,3.5-1.3,6-3.5,8.2c-11.6,11.6-23.2,23.2-34.8,34.7c-4.8,4.8-10.6,5-14.6,0.8c-3.9-4.1-3.4-9.3,1.5-14.1  c11.6-11.6,23.2-23.2,34.8-34.7c3.1-3.1,6.6-4.6,11-2.7C413.9,68.6,415.9,71.2,415.8,74.8z"></path>	<path d="M136.8,121.4c-1.9,0.1-4.1-1-6-3c-12-12.1-24.1-24-36.1-36.1c-3.8-3.8-3.9-9.4-0.5-13.1c3.5-3.8,8-4.2,12.6-0.8  c1.8,1.3,3.4,3,5,4.6c10.2,10.2,20.4,20.4,30.7,30.6c2.4,2.4,4.6,5,4.5,8.8C146.8,117.7,143.1,121.4,136.8,121.4z"></path>	<path d="M259.6,38.7c0,8.4,0.1,16.8,0,25.3c-0.1,5.7-3.7,9.4-8.8,9.4c-5.7,0-9.3-3.5-9.3-9.5c-0.1-17-0.1-34,0-51  c0-5.9,3.4-8.9,9.1-8.9c5.7,0,9,3.2,9,9C259.7,21.5,259.6,30.1,259.6,38.7z"></path>	<path d="M449.5,349.2c-12.8,0-25.1,2.5-37,7.4c-4.7,2-9.2,4.3-14.2,7.2c0.2-1.2,0.2-1.7,0.3-2.1c10.2-32.2,17.8-64.9,22.6-98.4  c1.7-12,3.6-24.2,2-36.3c-3.2-24.1-14.1-44.3-33.2-59.6c-20.6-16.4-44.1-23-70.2-19c-25.3,3.9-50,10.6-74.9,16.7  c-18.8,4.6-18.8,4.5-35.2-6.1c-8.4-5.4-16.7-11.1-27.4-11.6c-18.2-0.8-35,3.3-50.9,12.1c-29.9,16.5-48.7,52.7-45,86.5  c4.3,39.4,12.6,78,24.8,115.7c0.3,1.1,1.4,2.2,0.2,3.6c-13.4-8.8-28.1-14.2-44-15.6c-6.8-0.6-14.1-2.4-18.9,4.9c0,2.6,0,5.2,0,7.8  c4,4.4,9.1,5.1,14.9,5.3c19.2,0.8,34.5,10.6,49.9,21.1c9.3,6.4,13.4,15.1,17.3,24.7c11.2,27.1,24.9,53.1,39.8,78.3  c2.7,4.6,6.7,7.6,10.8,10.7c2.9,0,5.9,0,8.8,0c10.7-3.3,12.8-12.5,14.9-21.7c4.1-17.7,9.2-35,18.1-51c6.7-12,14.7-22.9,24.2-32.7  c4.4-4.6,6.7-4.5,11.4,0c22.4,21.4,36.7,47.4,44.2,77.3c1.1,4.2,2.4,8.4,3.3,12.6c1.4,6.7,5.3,11.5,10.7,15.4c3.9,0,7.8,0,11.7,0  c3.8-2.3,7.4-4.8,9.8-8.9c17.1-28.9,32.6-58.6,44.9-89.8c2.1-5.3,5-9.4,9.4-13c16.7-13.8,34.9-23.5,57.3-23.4  c5.5,0,9.2-4.2,9.1-9.4C458.9,352.6,455.4,349.2,449.5,349.2z M389,329.2c-10.4,39.9-25.5,78.1-44.2,114.9  c-6.4,12.5-13.1,24.9-21,37.5c-2.2-7.7-4.2-14.8-6.2-21.8c-8.8-29.9-24.8-55.4-47.4-76.8c-10.9-10.3-25-10-35.5,0.7  c-21.8,22.3-36.5,48.5-44,78.7c-1.5,5.9-3.1,11.8-4.8,18.3c-3.5-4.1-5.5-8.5-7.9-12.7c-39-69-63.8-142.6-73.2-221.3  c-0.7-5.6-0.5-11.2-0.4-16.9v0l0.2-0.8c2.3-7.3,3.6-14.9,7.1-21.9c13.5-27.2,40.2-42.8,70.4-41.1c4.9,0.3,8.9,3,12.8,5.6  c14.1,9.6,28.9,18,45.7,22c19.3,4.7,38.8,4.9,58.4,3c1.8-0.2,3.6-0.3,5.3-0.4c6-0.5,9.8-4.6,9.3-10.2c-0.4-5.5-4.3-8.7-10.5-8.2  c-10.2,0.8-20.3,2-30.6,1.5c-0.7,0-1.4-0.2-2.1-0.3c0.2-1.2,0.9-1.5,1.7-1.6c17.4-3.7,34.6-8.9,52.3-10.9  c28.3-3.1,51.1,7.6,67.9,30.5c6.4,8.8,10.3,18.6,12,29.4c0.1,0.9,0.7,1.7,1.1,2.6l0.1,0.9C405.5,263.9,397.5,296.6,389,329.2z"></path></g></svg>`,
    title: "GUM BLEACHING",
  },
  {
    id: 5,
    media: `<svg fill="#fcc881" height="4em" width="4em" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g>	<path d="M139.5,38.3c36.4,0.3,67.5,14.3,95.2,37c6.4,5.2,12.6,10.8,18.1,16.9c2.5,2.7,3.7,2.3,6-0.1c20.5-21.3,44-38,72.4-47.3  c24.9-8.1,50-8.8,75.2-1.7c4,1.1,5.8,0,7.5-3c2.2-4,4.5-7.9,6.7-11.9c4.5-8.2,11.2-13,20.7-13.1c9.5,0,16.3,4.6,20.8,12.8  c0.5,0.9,1,1.8,1.5,2.8c6.2,13.5,15.9,23.4,29.5,29.5c1,0.4,1.8,1.1,2.8,1.5c8.3,4.4,13,11.2,13.1,20.6c0,9.4-4.7,16.2-13,20.7  c-6.9,3.8-6.8,3.8-3.4,10.6c20.1,40.2,21.9,81.3,5.3,123.1c-1.3,3.4-1.1,5.7,0.6,8.6c5.2,9,9.1,18.5,10.7,28.9  c3.2,21.5-4.9,37.7-22.9,49.2c-11.9,7.6-25.2,11.4-39.1,13.2c-5,0.6-7.2,2.7-8.8,7.1c-5.1,14-7.4,28.5-7.7,43.3  c-0.5,20-1.8,39.9-9.1,59c-5.3,13.8-12.3,26.4-23.3,36.4c-28.1,25.5-71,20.4-93.1-11c-11.3-16-16.9-34.5-22-53.1  c-4.2-15.2-7.3-30.7-12.6-45.5c-1.7-4.8-3.7-9.5-7-13.4c-4.8-5.6-10.9-5.6-15.7,0.1c-4.8,5.8-7,12.9-9.2,19.9  c-5.8,18.7-9.5,38-15.7,56.7c-3.9,11.7-8.7,22.9-15.2,33.3c-23.4,37.4-78.7,40-105.1,1.3c-13.3-19.4-19.4-41-21-64.1  c-1.1-15.4-0.5-30.9-3.8-46.1c-4.3-20.2-14.1-38-25.1-55.2c-13.6-21.2-27.9-42-38-65.4c-13.7-32-16-64.7-6.9-98.2  c0.8-2.9,0.6-5.2-0.6-8c-10.2-23-8.1-54.7,25.8-70.5C47.1,57,61.9,54.2,77,52.7c2.3-0.2,4.4-0.8,6.5-1.8  C101.2,42.6,119.9,38.3,139.5,38.3z M394.5,57.6c-12.9-2.7-24.4-3-35.9-1.5c-37,5-65.8,24.7-90.8,51.1c-1.2,1.2-1.8,2.2-0.9,4.1  c6.3,13.3,15.2,23.5,30.3,26.8c5.7,1.2,11.4,1.8,17.2,2c5.4,0.2,8.9,3.7,8.8,8.5c-0.1,4.8-3.7,8.3-9,8.3c-27.5,0-49.2-10.1-61.6-36  c-1.6-3.3-2.8-6.8-5.3-9.6c-13.1-14.6-27.6-27.6-44.5-37.5c-24.2-14.2-50.1-21.1-78.2-17.3C83.4,62,53.9,84.9,34.6,120.8  c-9.9,18.4-10,12.9,2.2,29.9c17.6,24.5,40.7,43.5,65.3,60.8c60.2,42.3,126.4,72.4,197,92.7c41.2,11.8,83,19.8,126.2,18.2  c3.5-0.1,5.3-1.2,6.8-4.2c6.5-12.7,13.9-24.7,22-36.4c7.3-10.6,13.8-21.5,19.9-32.8c16.3-30.2,22.8-62,15.1-95.9  c-2.8-12.4-7.1-24.3-13.9-35.5c-5.7,5.4-8.8,12-12.1,18.3c-4.5,8.6-11.2,13.9-21.2,14c-10.2,0.1-17.3-5.1-21.5-14.2  c-6.8-14.6-17.3-25.3-32.1-31.9c-1.3-0.6-2.5-1.3-3.6-2.1c-14.1-9.3-13.9-29.3,0.3-38.4C387.5,61.4,390.5,59.9,394.5,57.6z   M21.5,158.9c-0.4,2.4-0.8,4.1-1,5.8c-3.2,25.7,1.2,50.2,12.1,73.7c9.6,20.8,22.8,39.4,35,58.6c11.3,17.8,21.2,36.3,26.2,57  c4.1,17,3.6,34.5,4.8,51.8c1.4,20.2,6.5,39.4,18.7,56.1c20.1,27.5,57.4,26.7,76.3-1.6c3.9-5.9,7-12.1,9.6-18.6  c7.9-19.9,11.8-41,17.8-61.5c3.6-12.3,7.3-24.6,16.7-34.1c10.4-10.6,26.3-10.4,36.7,0.3c5.1,5.3,8.3,11.7,11,18.4  c6.1,15.4,9.4,31.5,13.7,47.4c4.5,16.7,9.2,33.5,18.9,48.2c11.8,17.8,32.2,25.7,51.8,19.8c13.8-4.2,22.8-14,29.6-26.1  c9.6-17,13.4-35.6,13.9-55c0.5-18.6,1.1-37.2,7.5-55c1.7-4.6,0-4.8-3.8-4.7c-32.2,0.5-63.8-4.1-95-11.6  c-68.9-16.5-133.8-42.9-194.4-79.4C87.9,224.3,50.8,196.9,21.5,158.9z M441.5,32.1c-2.9,0-4.3,1-6.7,5.8  c-7.8,16.1-19.2,28.7-35.6,36.6c-3.5,1.7-8.1,2.8-8.2,7.8c-0.1,5.4,4.8,6.5,8.4,8.3c15,7.5,26.3,18.4,33.7,33.5  c0.8,1.7,1.8,3.4,2.8,5.1c3.3,5.3,8.2,5.2,11.5-0.1c1-1.6,1.9-3.3,2.8-5.1c7.3-14.6,18.1-25.6,32.9-32.8c1.9-0.9,3.8-1.9,5.5-3  c5.1-3.2,5-8-0.1-11.2c-2.5-1.6-5.2-2.9-7.8-4.3c-12.6-6.6-22.3-16.2-29-28.9c-1.5-2.8-3-5.5-4.6-8.3  C445.8,33.3,444,32.1,441.5,32.1z M450.3,319.4c10.4-2.1,19.2-4.9,27.1-10c16.2-10.3,20.6-32.5,9.3-49  C475.6,280.4,462.2,298.8,450.3,319.4z M19.7,112.7c3.8-7.1,7.7-13.4,12.2-19.1c4.4-5.6,9.1-11,14-16.9  C28.3,81.7,16.7,97.5,19.7,112.7z"></path>	<path d="M376.9,142.9c6.4,0.1,11.5,3,14.4,8.8c3.9,8,9.8,13.6,17.7,17.9c12.7,6.9,12.6,22.6-0.1,29.5c-7.7,4.2-13.3,9.7-17.4,17.5  c-6.8,12.6-22.8,12.6-29.5-0.1c-4.2-7.8-9.8-13.3-17.5-17.4c-12.6-6.8-12.6-22.7,0.1-29.4c7.8-4.1,13.6-9.6,17.4-17.5  C364.8,146.1,369.9,143,376.9,142.9z M401.6,183.9c-12.4-4.6-19.8-13.1-25.2-24.5c-4.5,12.1-13,19.6-24.7,25.2  c12.3,4.5,19.7,13,25.3,24.8C381.4,196.8,390.2,189.6,401.6,183.9z"></path>	<path d="M134.1,72.2c8.8-0.6,12.8,1.7,13.2,7.5c0.5,5.9-3.2,9-11.7,9.4c-17.2,0.9-32.5,6.7-46.1,17.2c-5.6,4.3-10.6,4-13.8-0.5  c-3-4.2-1.7-8.9,3.6-13C95.5,80.3,113.7,73.4,134.1,72.2z"></path>	<path d="M70,124.6c0,4.6-3.7,8.3-8.3,8.3c-4.8,0.1-8.7-3.8-8.6-8.6c0.1-4.5,4-8.2,8.6-8.1C66.3,116.3,70,120.1,70,124.6z"></path></g></svg>`,
    title: "GUM CONTOURING",
  },
  {
    id: 7,
    media: `<svg fill="#fcc881" height="4em" width="4em xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><path d="M226.4,510.3c-10.8-4.4-13.2-13.6-13.7-23.9c-0.1-2-0.5-3.9-0.6-5.9c-0.1-2.4-1.1-2.8-3.5-2.6c-10.7,1.3-20.3-5.4-22.7-15.4 c-2.5-10.5,2.9-20.8,13.2-24.6c7.7-2.9,7.6-2.9,6.7-10.9c-0.4-3.3-1-6.5-1-9.8c0-3.6-1.2-4.2-4.7-3.9c-14,1.3-24.4-9.1-23.2-22.8 c0.8-8.9,7.1-16,17.3-18.5c3.9-0.9,5.8-2.3,4.5-6.5c-0.6-1.9-0.5-3.9-0.8-5.9c-0.4-3.4,0-7.2-1.4-10.2c-1.8-3.8-6-0.7-9.2-1.7 c-9.3-2.8-15.8-10-16.3-19.4c-0.6-9.4,5.1-18.1,14.7-20.9c4.9-1.4,6.2-3.1,5.3-8.3c-1.9-11.7-3-23.5-4.2-35.3 c-0.3-2.8-1.2-3.6-3.9-3.5c-9.2,0.1-18.5,0.1-27.7,0c-9.5-0.1-15.4-4.9-17.4-14.2c-1.4-6.9-2.6-13.9-3.8-20.9 c-0.4-2.6-1.3-3.8-4.4-3.8c-12.6,0-17.2-3.5-20.6-15.4c-8.4-29.4-18.4-58.3-25.2-88.1c-8.6-37.8,10.6-80.5,44.1-100.1 c10.9-6.4,22.5-10.7,35-12.8c1-0.2,2.4,0.3,3-1.2c7.6,0,15.2,0,22.7,0c4.8,2,10,2.2,15,3.6c29.9,8.3,60.2,10.7,90.9,5.2 c12.7-2.3,25.2-5.2,37.6-8.8c7.3,0,14.5,0,21.8,0c6.9,1.9,14,2.6,20.7,5c11.6,4.1,22.2,9.9,31.6,17.9c4.3,3.7,5,7.6,2.3,11.1 c-2.7,3.5-7.1,3.9-11.3,0.5c-23.5-19.4-49.8-23.8-78.8-15.8c-38.9,10.7-77.7,10.2-116.6-0.4c-26.3-7.2-50.8-3.4-73,13.2 c-26.8,20.1-37.9,54.3-28.3,88.2c7.5,26.4,15.4,52.7,23,79c0.9,3,2.3,4.1,5.5,4c19-0.2,37.9-0.1,56.9-0.1c2.2,0,4.3,0,6.3,1.1 c3.1,1.8,4.3,4.5,3.6,7.9c-0.8,4-3.6,5.8-7.4,5.8c-10.1,0.1-20.1,0-30.2,0c-9.5,0-9.5,0-8,9.2c0.2,1.1,0.4,2.3,0.7,3.4 c2.2,11.3,2.2,11.3,13.9,11.3c66.3,0,132.5,0,198.8,0.1c4,0,6.3-0.5,6.7-5.3c0.5-6.2,2.1-12.2,3.3-18.7c-3.9,0-7.3,0-10.8,0 c-45.5,0-91,0-136.5,0c-1,0-2,0-3,0c-6.2-0.1-9.7-2.8-9.7-7.4c0.1-4.6,3.6-7.4,9.8-7.4c56,0,112.1-0.1,168.1,0.1 c4.4,0,6.2-1.1,7.4-5.5c7.7-27.4,16.1-54.5,23.7-81.9c5-18.1,2.9-35.9-4.7-53c-0.5-1.2-1.2-2.4-1.6-3.6c-1.7-4.4-0.4-8.4,3.1-10.2 c3.8-1.9,8.1-0.3,10.3,4c4.6,9.2,7.7,18.8,9.2,29c2.3,15.1,0.6,29.8-3.7,44.4c-7.5,25.2-14.8,50.5-22.2,75.7 c-3.5,12.1-8.1,15.6-20.9,15.7c-2.6,0-3.7,0.7-4.1,3.3c-1,6.5-2.4,12.9-3.5,19.4c-1.9,10.9-7.9,16-18.9,16.1c-8.7,0-17.5,0-26.2,0 c-1.9,0-4.5-0.6-4.2,2.5c0.3,2.7-2.7,6,2,7.9c9.5,3.8,14.3,11.6,13.6,21.2c-0.6,8.7-6.7,16.1-16,18.5c-4.2,1.1-5.9,2.7-6,7.1 c-0.2,5.9-1.2,11.8-2,17.7c-0.3,2.1,0.3,2.7,2.3,3.4c11,3.7,16.2,10.7,16,20.9c-0.3,9.9-6.4,17.4-17.3,20c-4.9,1.2-7.2,3-7.2,8.2 c-0.1,5.6-0.9,11.2-1.9,16.7c-0.4,2.4,0.4,3.3,2.5,3.8c10.1,2.6,15.7,11.5,15.5,20.3c-0.2,9.7-6.3,17.7-16.6,20 c-5.6,1.3-7.2,3.9-7.6,9.1c-1,11.3-2.9,22.6-3.7,33.9c-0.7,9.6-5.1,15.9-14.2,18.9C271.9,510.3,249.1,510.3,226.4,510.3z  M313.6,322.2c0.4-6.1,0.4-6.1-5.4-4.5c-5.4,1.5-10.8,3-16.2,4.4c-2.9,0.7-5.9,1.1-8.4-1.2c-2-1.8-3-4-2.5-6.6 c0.7-3.7,3.3-5.5,6.7-6.4c9-2.4,18.1-4.8,27.2-7.2c5.4-1.4,10.8-2.8,16.2-4.4c3.8-1.1,6-3.8,4.7-7.9c-1.2-3.6-4.1-4.9-7.9-3.9 c-0.8,0.2-1.6,0.3-2.4,0.5c-44.3,11.9-88.6,23.7-132.8,35.6c-5.2,1.4-7.7,4.4-6.6,8.1c1,3.8,4.4,5.2,9.7,3.8 c19.2-5.1,38.4-10.2,57.6-15.4c2.5-0.7,4.8-1,7.2,0.2c3,1.6,4.1,4.2,3.8,7.4c-0.4,3.8-3.1,5.6-6.5,6.5c-12.2,3.3-24.4,6.6-36.7,9.8 c-9.9,2.6-9.9,2.6-8.7,12.5c0.3,2.8,1,5.6,0.9,8.3c-0.2,4.4,1.6,4.5,5.2,3.5c26.6-7.3,53.3-14.3,80-21.4c4.1-1.1,9.2-1.2,12-3.8 c2.9-2.6,1.6-8,2.3-12.2C313.1,326.1,313.3,324.2,313.6,322.2z M261.4,260.3c-18.4,0-36.9,0.2-55.3-0.1c-4.4-0.1-4.7,1.5-4.2,5.1 c1.4,10.3,2.8,20.5,3.6,30.9c0.4,4.7,1.5,5.5,6.1,4.3c34-9.3,68.1-18.5,102.2-27.4c4.8-1.2,6.1-3.5,6.5-7.9c0.4-3.9-0.6-4.9-4.6-4.9 C297.7,260.5,279.5,260.3,261.4,260.3z M261.1,495.5c9.2,0,18.4,0,27.7,0c2.5,0,4.6-0.1,4.9-3.4c1.3-11.5,2.6-22.9,4-34.3 c0.3-2.5-0.2-3.2-2.8-2.5c-21.9,5.9-43.8,11.8-65.7,17.6c-2.4,0.6-3.1,1.8-2.7,4.2c0.7,4.5,1.4,9.1,1.7,13.7 c0.2,3.6,1.6,4.9,5.2,4.8C242.7,495.4,251.9,495.5,261.1,495.5z M305.8,389.2c1.1-3.3-0.4-3.8-4.3-2.6c-7.5,2.3-15.2,4.1-22.8,6.1 c-18.7,5-37.5,10-56.2,15.1c-1.6,0.4-4.1,0.1-3.6,3.4c1,5.7,1.5,11.4,2,17.2c0.2,2.5,1,3.3,3.6,2.6c25.4-6.9,50.7-13.7,76.1-20.5 c1.8-0.5,2.7-1.2,2.9-3.2C304.2,401.5,305,395.8,305.8,389.2z M330.4,359.6c-0.1-5.8-3.7-7.8-9.9-6.2c-29.7,7.9-59.4,15.9-89,23.9 c-11.4,3.1-22.9,6.1-34.3,9.3c-5.5,1.5-7.3,6.4-4.1,10c2.3,2.6,5.2,2.2,8.2,1.4c22.1-5.9,44.1-11.8,66.2-17.7 c18.9-5.1,37.8-10.2,56.7-15.2C327.7,364.2,330.3,362.7,330.4,359.6z M206.4,463.6c1.5-0.3,2.9-0.5,4.4-0.9c20-5.4,40-10.8,60-16.1 c15.2-4.1,30.5-8.2,45.7-12.2c2.8-0.7,4.8-2.2,5.3-5.2c0.4-2.3-0.3-4.3-2.1-5.7c-2.5-2-5.2-1.2-8-0.5c-27.9,7.5-55.9,14.9-83.8,22.4 c-7.5,2-14.9,3.9-22.4,6c-3.5,1-5.7,3.3-5,7.3C201.1,461.9,203.4,463.2,206.4,463.6z"></path></svg>`,
    title: "ROOT CANALS",
  },
  {
    id: 7,
    media: `<svg fill="none" viewBox="0 0 15 15" height="4em" width="4em" {...props}>
    <path
      stroke="#fcc881"
      d="M7.5 9V7.5H8A1.5 1.5 0 009.5 6v-.1a1.4 1.4 0 00-1.4-1.4h-.6A1.5 1.5 0 006 6m1 4.5h1m-.5 4a7 7 0 110-14 7 7 0 010 14z"
    />
  </svg>`,
    title: "F.A.Q",
  },
];

function Services() {
  return (
    <div className="w-full bg-black h-screen pt-40">
      <div className="bg-black flex justify-center items-center px-8 xl:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-16 items-center">
          {storiesData.map((category) => (
            <div
              className="border-2 border-[#f9c981] h-full rounded-xl flex justify-center items-center flex-col w-full md:[200px] xl:w-[270px] px-4 py-8 hover:scale-110 transition-all duration-300"
              key={category.id}
            >
              <div
                dangerouslySetInnerHTML={{ __html: category.media }}
              />
              <p className="background-gradient-text w-full tex-xl pt-6 text-white text-center font-semibold">
                {category.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
