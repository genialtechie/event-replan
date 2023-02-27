import styles from '../../styles/date-picker.module.css';
import '@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css';
import DatePicker from '@amir04lm26/react-modern-calendar-date-picker';
import { utils } from '@amir04lm26/react-modern-calendar-date-picker';

const MyDatePicker = ({ selectedDay, setSelectedDay, disabledDays }) => {
  const handleDisabledSelect = (day) => {
    alert('This day is not available');
  };
  const renderCustomInput = ({ ref }) => (
    <input
      ref={ref}
      placeholder="Reserve a date"
      style={{ width: 250 }}
      value={
        selectedDay
          ? `✅: ${selectedDay.day}/${selectedDay.month}/${selectedDay.year}`
          : ''
      }
      onChange={() => {}}
      className="form-input z-10 block w-full px-1 border-0 border-b-2 border-gray-400 focus:ring-0 focus:border-custom-theme"
    />
  );
  return (
    <DatePicker
      value={selectedDay}
      onChange={setSelectedDay}
      renderInput={renderCustomInput}
      calendarClassName={styles.DatePicker__calendarContainer}
      disabledDays={disabledDays || []}
      onDisabledDayError={handleDisabledSelect}
      wrapperClassName={styles.DatePicker}
      minimumDate={utils().getToday()}
      colorPrimary="#a128b7"
      calendarPopperPosition="top"
      shouldHighlightWeekends
    />
  );
};

export default MyDatePicker;
