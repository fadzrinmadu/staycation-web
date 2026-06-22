import { DateRangePicker } from './DateRangePicker';

export default {
  title: 'Components/UI/DateRangePicker',
  component: DateRangePicker,
};

export const Default = () => (
  <div style={{ padding: '20px' }}>
    <DateRangePicker
      title="Select a date range"
      defaultStartDate={new Date()}
      defaultEndDate={new Date()}
      onChange={(startDate, endDate) => {
        console.log('Selected date range:', startDate, endDate);
      }}
    />
  </div>
);
