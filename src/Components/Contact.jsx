import { BiSolidContact } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
export default function Contact() {
  return (
    <section id="contact" className="w-10/12 mx-auto py-10 space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="text-lg space-y-3 flex justify-center">
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-blue-400">Get in Touch</h1>
              <p>An invitation to connect and communicate openly.</p>
            </div>
            <div className="flex items-center gap-5">
              <div className="border border-blue-400 shadow-md shadow-blue-400 rounded-lg p-2">
                <IoLocationOutline className="z-10 text-2xl text-red-400" />
              </div>
              <div>
                <p className="text-base font-bold">Location</p>
                <p className="text-sm">Bangladesh</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="border border-blue-400 shadow-md shadow-blue-400 rounded-lg p-2">
                <SiGmail className="text-2xl text-blue-600" />
              </div>
              <div>
                <p className="text-base font-bold">Gmail</p>
                <a
                  href="https://mail.google.com/mail/u/0/#inbox"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-sm">contactme.ahmod@gmail.com</p>
                </a>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="border border-blue-400 shadow-md shadow-blue-400 rounded-lg p-2">
                <FaWhatsapp className="text-2xl text-green-400" />
              </div>
              <div>
                <p className="text-base font-bold">WhatsApp</p>
                <a
                  href="https://web.whatsapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-sm">+8801747888829</p>
                </a>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="border border-blue-400 shadow-md shadow-blue-400 rounded-lg p-2">
                <BiSolidContact className="text-2xl text-orange-600" />
              </div>
              <div>
                <p className="text-base font-bold">Phone</p>
                <p className="text-sm">+8801407595350</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-5 bg-base-300 py-8 px-5 rounded-lg shadow-md">
          <div className="text-center pb-5">
            <h1 className="text-3xl font-bold text-blue-400">Contact Me</h1>
            <p className="text-lg">
              Have a question or want to work together? Drop me a message!
            </p>
          </div>
          <div className="space-y-3">
            <label className="text-lg font-bold">Your Name</label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered input-primary w-full"
            />
          </div>
          <div className="space-y-3">
            <label className="text-lg font-bold">Your Email</label>
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered input-primary w-full"
            />
          </div>
          <div className="space-y-3">
            <label className="text-lg font-bold">Your Message</label>
            <textarea
              className="textarea textarea-primary w-full"
              placeholder="Message"
            ></textarea>
          </div>
          <button className="btn btn-outline text-blue-400 hover:bg-transparent hover:text-orange-500">
            Send Email
          </button>
        </div>
      </div>
    </section>
  );
}
