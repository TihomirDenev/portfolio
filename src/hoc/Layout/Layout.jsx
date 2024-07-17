import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import PropTypes from 'prop-types';

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};