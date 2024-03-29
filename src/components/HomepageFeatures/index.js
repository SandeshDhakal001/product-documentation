import styles from "./styles.module.css";


const List = [
  {
    title:
      "Provides a comprehensive dashboard to manage exemption requests efficiently.",
  },
  {
    title:
      "Empowers customers to seamlessly upload tax exempt declaration documents and get exempted before checkout.",
  },
  {
    title:
      "Enables self-sign-in for customers by eliminating hassles of registration and streamlines tiring tax exemption process.",
  },
  {
    title:
      "Easy validation of tax exemption claims, documents and declarations. ",
  },
  {
    title: "Tax Exemption status tracking and automated expiry alerts. ",
  },
  {
    title: "Seamless customer shopping experience. ",
  },
];

const Features = [
  {
    title: "Customer Self Sign-In ",
  },
  {
    title:"Tax Exemption Claim with Certificate Upload "
  },
  {
    title:"Validation of Customer Tax Exemption Certificate "
  },
  {
    title:"Comprehensive Dashboard for Exemption Request Management "
  },
  {
    title:"Accept/Reject/Extend/Revoke Customer Tax Exemption "
  },
  {
    title:"Tax Exemption Status Tracking "
  },
  {
    title:"Automated Expiry Notifications "
  },
];


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <p className={styles.description}>
          Are you tired of the endless hassle of managing tax exemptions for
          your valued customers? Say goodbye to missed requests, lost time, and
          unnecessary costs associated with the tax exemption process.{" "}
        </p>
        <p className={styles.description}>
          Tax Exempt provides streamlined method to claim tax-exempt status on
          the purchases during checkout process with effortless procedures.
          Reduces the hassle of dispersed tax exemption requests, reduces
          back-and-forth communications, provides tax document validation and
          exemption status tracking. Tax Exempt handles the tax exemption
          process based on diverse jurisdictions and tax categories, saves
          numerous man hours to increase ROI for shop owners, and accelerates
          the exemption process for customers by letting them claim the tax
          exemption before checkout.{" "}
        </p>
        <ul>
          {List.map((item, index) => (
            <li className={styles.li} key={index}>
              {item.title}
            </li>
          ))}
        </ul>
        <p className={styles.featureText}>Features:</p>
        <ul>
          {Features.map((item, index) => (
            <li className={styles.li} key={index}>
              {item.title}
            </li>
          ))}
        </ul>
      
        <div className={styles.linkWrapper}>
        <a style={{width: "260px"}}className={styles.link} href='/docs-tax-exempt/docs/getting-started'>
       Let's get started 
       </a>
      </div>
     
  </div>
    </section>
  );
}
