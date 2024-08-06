import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobLisings from '../components/JobListings';
import ViewAll from '../components/ViewAll';

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobLisings />
      <ViewAll />
    </>
  );
};

export default HomePage;
