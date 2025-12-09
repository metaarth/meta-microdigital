import { Link } from 'react-router-dom'

const PageHeader = ({ title, breadcrumbs }) => {
  return (
    <div className="container-fluid page-header d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5 mb-5">
      <h1 className="display-4 page-header-title mb-3 mt-0 mt-lg-5">{title}</h1>
      <div className="d-inline-flex page-header-breadcrumbs">
        {breadcrumbs.map((crumb, index) => (
          <div key={index} className="d-flex align-items-center">
            {index > 0 && <p className="m-0 px-2">/</p>}
            {crumb.link ? (
              <p className="m-0">
                <Link to={crumb.link} className="page-header-link">
                  {crumb.label}
                </Link>
              </p>
            ) : (
              <p className="m-0 page-header-text">{crumb.label}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default PageHeader
