export const Pricing = () => {
  return (
    <div className="pricing" id="pricing">

      <h1 className="section-title">PROJECT PRICING PLANS</h1>
      <p className="pricing-explain">Our pricing plans come with various membership tiers, each tailored to cater to different projects and class + code types</p>

      <div className="pricing-inner">

        <div className="plan">
          <h4>Basic plan</h4>
          <h1>£0</h1>
          <span></span>
          <div className='plan-feature'><i className='fa fa-check'></i><p>Smart coding plan</p></div>
          <div className='plan-feature'><i className='fa fa-check'></i><p>At home workouts</p></div>
          <button>Join Now</button>
        </div>

        <div className="plan">
          <h4>Gold plan</h4><p></p>
          <h1>£10</h1>
          <span></span>
          <div className='plan-feature'><i className='fa fa-check'></i><p>Pro codes</p></div>
          <div className='plan-feature'><i className='fa fa-check'></i><p>Smart coding plan</p></div>
          <div className='plan-feature'><i className='fa fa-check'></i><p>At home workouts</p></div>
          <button>Join Now</button>
        </div>

        <div className="plan">
          <h4>Diamond plan</h4>
          <h1>£100</h1>
          <span></span>
          <div className='plan-feature'><i className='fa fa-check'></i><p>Elite classes and courses</p></div>
          <div className='plan-feature'><i className='fa fa-check'></i><p>Personal coaching</p></div>
          <div className='plan-feature'><i className='fa fa-check'></i><p>Pro codes</p></div>
          <div className='plan-feature'><i className='fa fa-check'></i><p>Smart coding plan</p></div>
          <div className='plan-feature'><i className='fa fa-check'></i><p>At home workouts</p></div>
          <button>Join Now</button>
        </div>

      </div>
    </div>
  )
}