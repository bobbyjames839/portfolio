import { useState } from "react"

export const Features = () => {

  const [featureOne, setFeatureOne] = useState(true);
  const [featureTwo, setFeatureTwo] = useState(true);
  const [featureThree, setFeatureThree] = useState(true);
  const [featureFour, setFeatureFour] = useState(true);

  const toggleFeatures = (num) => {
    setFeatureOne(prev => !prev);
    setFeatureTwo(prev => !prev);
    setFeatureThree(prev => !prev);
    setFeatureFour(prev => !prev);
   
    switch (num) {
      case 'One': setFeatureOne(true); break;
      case 'Two': setFeatureTwo(true); break;
      case 'Three': setFeatureThree(true); break;
      case 'Four': setFeatureFour(true); break;
      default: break;
    }
  }

  const Feature = (props) => {
    return (
      <div className="feature">
        <div className="feature-icon"><i className={props.icon}></i></div>
        <h4>{props.title}</h4>
        <p>{props.explanation}</p>
        <button onClick={() => toggleFeatures(props.num)}>{featureOne && featureTwo && featureThree && featureFour ? 'Read More' : 'Collapse'}</button>
      </div>
    )
  }

  const FeatureExpanded = (props) => {
    return (
      <div className="feature-expanded">
wrfw
      </div>
    )
  }
  

  return (
    <div className="features" id="features">
      <h1 className="section-title">FEATURES</h1>

      <div className="features-inner">

        {featureOne && <Feature icon='fa fa-television' title='FREE TUTORIALS' explanation='My tutorials in my channel, BobbyCodes, are free and you dont pay anything.' num='One'/>}
        {!featureTwo && !featureThree && !featureFour && <FeatureExpanded/>}

        {featureTwo && <Feature icon='fa fa-bug' title='FIX YOUR BUGS' explanation='You have any problem in your codes? Tell me, I will help you fix it.' num='Two'/>}
        {!featureOne && !featureThree && !featureFour && <FeatureExpanded/>}

        {featureThree && <Feature icon='fa fa-video-camera' title='ON TIME VIDEOS' explanation='We have a video every 4 days so check the channel every 4 days to watch it!' num='Three'/>}
        {!featureTwo && !featureOne && !featureFour && <FeatureExpanded/>}

        {featureFour && <Feature icon='fa fa-users' title='COOPERATION' explanation='You want me to work togther? Write emails to us, we will read it.' num='Four'/>}
        {!featureTwo && !featureThree && !featureOne && <FeatureExpanded/>}

      </div>
    </div>
  )
}