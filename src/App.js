import Banner from './components/UI/Banner.js';
import ProfileCard from './components/Profile/ProfileCard.js';
// import ButtonSection from './components/ButtonSection.js';
import SelectionWindow from './components/SelectionWindow/SelectionWindow.js';
import TopSectionWrapper from './components/UI/TopSectionWrapper.js';
import BackToTopButton from './components/UI/BackToTopButton';
import ProjectsSectionHeader from './components/UI/ProjectsSectionHeader';
import ProjectsGallery from './components/ProjectsGallery/ProjectsGallery';
import MainContainer from './components/UI/MainContainer.js';

const App = () => {
  return (
    <MainContainer>
      <Banner/>
      <TopSectionWrapper>
        <ProfileCard/>
        <SelectionWindow/>
      </TopSectionWrapper>
      <ProjectsSectionHeader/>
      <ProjectsGallery/>
      <BackToTopButton/>
    </MainContainer>
  );
}

export default App;
