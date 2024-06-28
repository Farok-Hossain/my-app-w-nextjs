import Image from "next/image";
// import myImage from "../../assets/images/myImage.jpg";
import myImage from "@/assets/images/myImage.jpg";

const AlbumPage = () => {
  return (
    <div>
      <h1>Using image component</h1>
      <Image
        src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQ9kXiqxWGfYyCJphYUSq8-H2typSIwHmxojTDAMIgqU-BhhKQkr_hELs5KEKQRdctSxHwGBbhg9w8n8PU"
        width={800}
        height={200}
        alt="putin"
      />
      <Image src={myImage} width={800} height={200} alt="putin" />
      <h1>Using img component</h1>
      <Image
        src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQ9kXiqxWGfYyCJphYUSq8-H2typSIwHmxojTDAMIgqU-BhhKQkr_hELs5KEKQRdctSxHwGBbhg9w8n8PU"
        width="800px"
        height="200px"
        alt="putin"
      />
    </div>
  );
};

export default AlbumPage;
