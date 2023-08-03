// import React, { useState } from "react";
// import "../src/App.css";
// import { contactInfo } from "../Info/allInfo";

// function ContactPage() {
//   const [text, setText] = useState("");

//   function addMsg(event) {
//     setText(item.content);
//   }

//   return (
//     <section>
//       <div className="show-message">{text}</div>
//       <div className="contact-list">
//         {contactInfo.map((item) => {
//           return (
//             <div key={item.id} className="contact-item">
//               <a
//                 href={item.content}
//                 target="_blank"
//                 onClick={() => addMsg(item)}
//               >
//                 <img src={item.image} width="32px" />
//               </a>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// export default ContactPage;

import React, { useState } from "react";
import "../src/App.css";
import { contactInfo } from "../Info/allInfo";

function ContactPage() {
  const [text, setText] = useState("");

  function addMsg(item) {
    setText(item.content);
  }

  // กรองข้อมูลที่มี id เป็น 3 หรือ 4
  const filteredContactInfo = contactInfo.filter(
    (item) => item.id === 3 || item.id === 4
  );

  return (
    <section>
      <div className="show-message">{text}</div>
      <div className="contact-list">
        {contactInfo.map((item) => {
          if (item.id === 1 || item.id === 2) {
            // ข้อมูลที่มี id เป็น 1 หรือ 2 ไม่แสดงลิงก์
            return (
              <div key={item.id} className="contact-item">
                <a href={item.content} target="_blank">
                  <img src={item.image} width="32px" alt="icon" />
                </a>
              </div>
            );
          } else {
            // ข้อมูลที่มี id เป็น 3 หรือ 4 แสดงลิงก์และกล่อง show-message
            return (
              <div key={item.id} className="contact-item">
                <a onClick={() => addMsg(item)}>
                  <img src={item.image} width="32px" alt="icon" />
                </a>
                {/* <div className="show-message">{item.content}</div> */}
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}

export default ContactPage;
