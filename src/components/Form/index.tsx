/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("xeqbddln");
  if (state.succeeded) {
    return <p>Gracias, ¡estaremos en contacto lo mas pronto posible!</p>;
  }
  return (
    <section id="contact-form" className="pt-10 pb-24">
      <div className="px-10">
        <h2 className="font-bold text-3xl mb-10">Let's get in touch</h2>
        <form onSubmit={handleSubmit} className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-9 mb-10">
            <div className="flex flex-col ">
              <label htmlFor="username">Name</label>
              <input
                className="border-b-2 border-gray-300 p-4"
                id="username"
                type="text"
                maxLength={20}
                required
                placeholder="Enter a name"
              />
              <ValidationError
                prefix="Username"
                field="username"
                errors={state.errors}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email Address</label>
              <input
                className="border-b-2 border-gray-300 p-4"
                id="email"
                type="email"
                name="email"
                required
                placeholder="Enter an email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="message">Message</label>
            <textarea
              className="border-b-2 border-gray-300 p-4"
              rows={8}
              id="message"
              name="message"
              required
              placeholder="Your message here..."
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="bg-orange-500 text-white px-10 py-3 rounded-3xl"
              disabled={state.submitting}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
