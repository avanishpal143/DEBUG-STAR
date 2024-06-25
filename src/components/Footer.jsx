// import React from "react";

// const Footer = () => {
//   return (
//     <footer>
//       <div>
//         <h1>DEBUG STAR</h1>
//         <p>@all right reserved</p>
//       </div>

//       <div>
//         <h5>Follow Us</h5>
//         <div>
//           <a href="https://www.youtube.com/channel/UCKa1CAgqZPwhVzqP9eGOOGA" target={"blank"}>
//             Youtube
//           </a>
//           <a href="https://www.instagram.com/avanish_pal_143/" target={"blank"}>
//             Instagram
//           </a>
//           <a href="https://github.com/avanishpal143/" target={"blank"}>
//             Github
//           </a>
//           <a href="https://www.linkedin.com/in/avanishpal143/" target={"blank"}>
//             Linkedin
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;








import React from "react";

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>DEBUG STAR</h1>
        <p>@all right reserved</p>
      </div>

      <div className="contact-info">
        <h5>Contact Us</h5>
        <p>Email: mravanishpal143@gmail.com</p>
        <p>Phone: +757 005 5021</p>
        <p>Address: Moharipur, Gorakhpur, U.P. 273007</p>
      </div>

      <div className="subscription">
        <h5>Subscribe Me</h5>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <div>
        <h5>Follow Us</h5>
        <div>
          <a href="https://www.youtube.com/channel/UCKa1CAgqZPwhVzqP9eGOOGA" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
          <a href="https://www.instagram.com/avanish_pal_143/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://github.com/avanishpal143/" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/avanishpal143/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
