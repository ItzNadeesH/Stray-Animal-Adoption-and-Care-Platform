import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Alert = ({ alerts }) =>
  alerts != null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div
      key={alert.id}
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-2"
      role="alert"
    >
      <span className="block sm:inline">{alert.text}</span>
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
