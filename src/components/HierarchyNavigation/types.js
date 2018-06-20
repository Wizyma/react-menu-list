import PropTypes from "prop-types";

const navChild = () => ({
  childs: PropTypes.arrayOf(
    PropTypes.shape({
      navigationNode: PropTypes.shape({
        navigationItem: PropTypes.shape({
          departmentId: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
          image: PropTypes.string
        }),
        childs: navChildTypes
      })
    })
  )
});

export const navItemsTypes = {
  navigationItem: PropTypes.shape({
    departmentId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })
};

export const navChildTypes = navChild();
