import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    preferredContact: "email", // Default contact method
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.email.trim()) return "Email is required";
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) return "Email is invalid";
    if (!formData.phone.trim()) return "Phone number is required";
    if (!formData.message.trim()) return "Message is required";
    return null;
  };

  const sendWhatsAppMessage = () => {
    const phoneNumber = "+2348066181821"; // Your WhatsApp business number

    // Format the message for WhatsApp
    const message = `
*New Inquiry from Website*
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Subject:* ${formData.subject}

*Message:*
${formData.message}
    `;

    // Create the WhatsApp URL with the formatted message
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");

    return true;
  };

  const sendDirectEmail = () => {
    // Your email address
    const emailAddress = " omifodforeignlinkeducation@gmail.com";

    // Format subject line
    const emailSubject = `Website Inquiry: ${
      formData.subject || "New Contact Form Submission"
    }`;

    // Format email body
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}
    `;

    // Create mailto URL
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    // Open default email client
    window.location.href = mailtoLink;

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const validationError = validateForm();
    if (validationError) {
      setStatus({ type: "error", message: validationError });
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      let success = false;

      if (formData.preferredContact === "whatsapp") {
        success = sendWhatsAppMessage();
      } else {
        success = sendDirectEmail();
      }

      if (success) {
        setStatus({
          type: "success",
          message: `Your message has been sent successfully via ${
            formData.preferredContact === "whatsapp" ? "WhatsApp" : "email"
          }!`,
        });

        // Reset form after successful submission
        if (formData.preferredContact === "email") {
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
            preferredContact: "email",
          });
        }
      } else {
        setStatus({
          type: "error",
          message:
            "There was an error sending your message. Please try again later.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message:
          "There was an error sending your message. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className=" bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-24 ">
          <h1
            className="text-8xl text-center max-sm:text-4xl"
            style={{ fontFamily: "Imperial Script, cursive" }}
          >
            Contact Us
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-xl text-gray-600 max-sm:text-lg">
            Our team has reached out to you. We look forward to connecting as
            soon as possible!
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Info Section */}
            <div className="bg-[#0e2f4e] text-white p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Connect With Us
              </h2>
              <p className="mb-8 opacity-90 max-w-md">
              Our expert consultants are here to guide you on your journey to study abroad.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Visit Us</h3>
                    <p className="opacity-90">
                      Located in Port Harcourt Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="opacity-90 wrap-anywhere">
                      {" "}
                      omifodforeignlinkeducation@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="opacity-90">+234 806 618 1821</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Working Hours</h3>
                    <p className="opacity-90">
                      Monday - Saturday: 9:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://x.com/omifodforeign"
                    className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/@omifodforeign"
                    className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.615 3.184A3.005 3.005 0 0017.58 2.7C15.347 2.5 12 2.5 12 2.5s-3.347 0-5.58.2a3.005 3.005 0 00-2.035.484 3.066 3.066 0 00-1.122 1.153C2.5 5.554 2.5 8 2.5 8s0 2.446.763 3.663a3.066 3.066 0 001.122 1.153 3.005 3.005 0 002.035.484C8.653 13.5 12 13.5 12 13.5s3.347 0 5.58-.2a3.005 3.005 0 002.035-.484 3.066 3.066 0 001.122-1.153C21.5 10.446 21.5 8 21.5 8s0-2.446-.763-3.663a3.066 3.066 0 00-1.122-1.153zM10 10.667V5.333L15.333 8 10 10.667z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0e2f4e] mb-6">
                Send Us a Message
              </h2>

              {status && (
                <div
                  className={`mb-6 p-4 rounded-lg ${
                    status.type === "success"
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0e2f4e] focus:border-transparent transition"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0e2f4e] focus:border-transparent transition"
                      placeholder="Your email address"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0e2f4e] focus:border-transparent transition"
                      placeholder="Your phone number"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0e2f4e] focus:border-transparent transition"
                      placeholder="What is this regarding?"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0e2f4e] focus:border-transparent transition"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>

                <div className="mb-8">
                  <p className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Contact Method *
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === "email"}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <span
                        className={`inline-flex items-center px-4 py-2 rounded-full border ${
                          formData.preferredContact === "email"
                            ? "bg-[#0e2f4e] text-white border-[#0e2f4e]"
                            : "bg-white text-gray-700 border-gray-300"
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        Email
                      </span>
                    </label>

                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="whatsapp"
                        checked={formData.preferredContact === "whatsapp"}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <span
                        className={`inline-flex items-center px-4 py-2 rounded-full border ${
                          formData.preferredContact === "whatsapp"
                            ? "bg-[#0e2f4e] text-white border-[#0e2f4e]"
                            : "bg-white text-gray-700 border-gray-300"
                        }`}
                      >
                        <svg
                          className="h-5 w-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"></path>
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.258 17.793c-.225.499-.637.89-1.191 1.137-1.122.505-2.546.573-4.192.322-2.007-.307-3.86-1.236-5.251-2.626-2.175-2.176-3.096-5.308-2.366-8.271.16-.652.459-1.283.911-1.816.335-.395.773-.687 1.266-.85.265-.089.537-.108.811-.061.35.06.672.218.95.457.35.302.676.729.95 1.164.158.252.323.518.475.777.15.26.297.542.345.854.054.343-.007.702-.173 1.003-.14.258-.337.48-.577.651-.185.129-.382.275-.548.406-.166.131-.315.222-.371.336-.56.115-.036.252.095.489.133.237.561.952 1.207 1.539 1.061.958 1.914 1.262 2.183 1.399.211.107.45.183.662.154.175-.026.354-.156.445-.275.092-.12.198-.258.304-.402.105-.143.21-.29.368-.372.159-.081.338-.094.524-.061.186.034.358.096.545.165.344.126.735.272 1.11.427.223.095.437.192.626.301.188.11.346.236.444.406.13.224.147.483.09.737-.06.258-.173.503-.313.732z"></path>
                        </svg>
                        WhatsApp
                      </span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full md:w-auto px-8 py-3 bg-[#0e2f4e] text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg ${
                    loading
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:bg-[#1a4568]"
                  }`}
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
