import Title from "./Title"
import { servicesData } from "../data"

const Services = () => {
  return (
    <>
      <section className="section services" id="services">
        <Title first="Our" last="services" />

        <div className="section-center services-center">
          {servicesData.map((item) => {
            return (
              <article className="service" key={item.id}>
                <span className="service-icon">
                  <i className={item.icon}></i>
                </span>
                <div className="service-info">
                  <h4 className="service-title">{item.title}</h4>
                  <p className="service-text">{item.text}</p>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}
export default Services
