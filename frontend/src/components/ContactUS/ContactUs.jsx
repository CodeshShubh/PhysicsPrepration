import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const ContactUs = () => {
  return (
    <main className="p-2 m-5 bg-orange-50 rounded">
      {/* top */}
      <div className="  flex flex-col lg:flex-row justify-evenly  gap-5 p-5">
        {/* left */}
        <div className=" space-y-5 w-[100%] lg:w-[35%] ">
          <h1 className="font-extrabold text-xl">Need a direct line?</h1>
          <p className="font-light tracking-tight">
          If you have an urgent need, contact me on WhatsApp at given number for quick assistance.
          </p>
          <div className=" flex items-center gap-5  ">
            <FaPhoneAlt className="bg-orange-200 p-1 w-[30px] h-[30px] rounded text-center" />
            <div>
              <p>Phone:</p>
              <p>+91 7060821855</p>
            </div>
          </div>

          <div className="flex items-center gap-5  ">
            <HiOutlineMail className="bg-orange-200 p-1 w-[30px] h-[30px] rounded text-center" />
            <div>
              <p>Email:</p>
              <p>Shubhanshu.Saadhiyaan@gmail.com</p>
            </div>
          </div>
        </div>
        <div className=" overflow-hidden">
          <iframe
          className="w-[340px] h-[200px] lg:w-[550px] lg:h-[280px] mx-auto rounded"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14645.33503870862!2d77.25199696000543!3d29.779481550926178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e89171ff47597%3A0x927acded021f7b30!2sGangoh%2C%20Uttar%20Pradesh%20247341!5e1!3m2!1sen!2sin!4v1742182826701!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>


{/* contactus form */}
      <div className=" mt-5 ">
        <form className=" p-5 mx-auto">
           <h1 className="font-extrabold text-2xl">Contact us</h1>
           <p className="font-light mb-3">Your email address will not be published. Required fields are marked *</p>
           {/* inputs */}
           <div className=" flex justify-between w-full mb-5">
             <input type="text" placeholder="Name*" className="w-[48%] outline-none border rounded p-2 "/>
             <input type="text" placeholder="Email*" className="w-[48%] outline-none border rounded p-2"/>
           </div>
           <textarea placeholder="Comment" className="outline-none border rounded w-full h-[10%] p-1 resize-none mb-2" />

           <fieldset className="space-x-3 mb-3">
             <input id="comment" type="checkbox" className="accent-orange-400"/>
             <label htmlFor='comment' className="font-light">Save my name, email in this brower for the next time I comment</label>
           </fieldset>
           <button type="submit" className="bg-orange-400 p-2 rounded-2xl cursor-pointer transition transform duration-300 hover:bg-orange-300  hover:scale-102">Posts comment</button>
        </form>
      </div>
    </main>
  );
};

export default ContactUs;
