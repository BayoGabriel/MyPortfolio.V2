import React from 'react'
import "../Assets/Styles/timeline.css"

const Timeline = () => {
  return (
    <div id='timeline'>
        <div className="container-lg timeline_section erling_tm_experience">
            <div className="header">
                <span>Timeline</span>
                <h3>My Timeline</h3>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-12 content">
              <div class="left">
<div class="box">
<div class="title wow fadeInLeft" data-wow-duration="1s">
<h3>Experience</h3>
</div>
<div class="list_wrap">
<ul>
<li class="wow fadeInLeft" data-wow-duration="1s">
<div class="list_inner">
<div class="occ">
<h3>Envato Market</h3>
<span>Web Designer</span>
</div>
<div class="time">
<span>2020-now</span>
</div>
</div>
</li>
<li class="wow fadeInLeft" data-wow-duration="1s">
<div class="list_inner">
<div class="occ">
<h3>Behance</h3>
<span>SEO Optimizer</span>
</div>
<div class="time">
<span>2018-2020</span>
</div>
</div>
</li>
<li class="wow fadeInLeft" data-wow-duration="1s">
<div class="list_inner">
<div class="occ">
<h3>Colorlib</h3>
<span>Theme Reviewer</span>
</div>
<div class="time">
<span>2016-2018</span>
</div>
</div>
</li>
</ul>
</div>
</div>
</div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Timeline