import React from 'react';

function PointMain(props) {
    return (
        <div class="faq app-pages app-section">
		<div class="container">
			<div class="pages-title">				
				<h2 style={{ textAlign: 'left', lineHeight: 1.5 }}>양승건님의 포인트는 
					<br/>
					<span style={{ fontWeight: 'bold', color: '#007FFF', fontSize: '1.2em' }}>1000P</span> 입니다.
				</h2>
			</div>
			<div class="entry">
				<ul class="collapsible" data-collapsible="accordion"> 
					<li>
						<div class="collapsible-header faq-collapsible">
							<div>
								신규가입 포인트 
							</div>		

							<div><span style={{ color: '#007FFF', fontSize: '1.2em' }}>+ 1000P</span><i class="fa fa-plus"></i></div> 
						</div>
						
						<div class="collapsible-body">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate illum, accusamus vel dolorem et veritatis. Ab odit quasi libero asperiores at vitae eveniet facere, ea nesciunt, aperiam magnam incidunt delectus!</p>
						</div>
					</li>
					<li>
						<div class="collapsible-header faq-collapsible">
							<div>
								레이드 리워드 보상 
							</div>							
							<div><span style={{ color: '#007FFF', fontSize: '1.2em' }}>+ 490P</span><i class="fa fa-plus"></i></div> 
						</div>
						
						<div class="collapsible-body">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate illum, accusamus vel dolorem et veritatis. Ab odit quasi libero asperiores at vitae eveniet facere, ea nesciunt, aperiam magnam incidunt delectus!</p>
						</div>
					</li>
					<li>
						<div class="collapsible-header faq-collapsible">
							<div>
								편의점 
							</div>							
							<div><span style={{ color: '#ff0000', fontSize: '1.2em' }}>- 490P</span><i class="fa fa-plus"></i></div> 
						</div>
						
						<div class="collapsible-body">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate illum, accusamus vel dolorem et veritatis. Ab odit quasi libero asperiores at vitae eveniet facere, ea nesciunt, aperiam magnam incidunt delectus!</p>
						</div>
					</li>
					<li>
						<div class="collapsible-header faq-collapsible">
							<div>
								스탬프 랜덤 포인트 보상 
							</div>							
							<div><span style={{ color: '#007FFF', fontSize: '1.2em' }}>+ 900P</span><i class="fa fa-plus"></i></div> 
						</div>
						
						<div class="collapsible-body">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate illum, accusamus vel dolorem et veritatis. Ab odit quasi libero asperiores at vitae eveniet facere, ea nesciunt, aperiam magnam incidunt delectus!</p>
						</div>
					</li>	
					<li>
						<div class="collapsible-header faq-collapsible">
							<div>
								스탬프 랜덤 포인트 보상 
							</div>							
							<div><span style={{ color: '#007FFF', fontSize: '1.2em' }}>+ 600P</span><i class="fa fa-plus"></i></div> 
						</div>
						
						<div class="collapsible-body">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate illum, accusamus vel dolorem et veritatis. Ab odit quasi libero asperiores at vitae eveniet facere, ea nesciunt, aperiam magnam incidunt delectus!</p>
						</div>
					</li>				
				</ul>
			</div>
		</div>
		<footer>
        <div className="container">
          <h6>Find & follow us</h6>
          <ul className="icon-social">
            <li className="facebook"><a href="#"><i className="fa fa-facebook"></i></a></li>
            <li className="twitter"><a href="#"><i className="fa fa-twitter"></i></a></li>
            <li className="google"><a href="#"><i className="fa fa-google"></i></a></li>
            <li className="instagram"><a href="#"><i className="fa fa-instagram"></i></a></li>
            <li className="rss"><a href="#"><i className="fa fa-rss"></i></a></li>
          </ul>
          <div className="tel-fax-mail">
            <ul>
              <li><span>Tel:</span> 900000002</li>
              <li><span>Fax:</span> 0400000098</li>
              <li><span>Email:</span> info@youremail.com</li>
            </ul>
          </div>
        </div>
        <div className="ft-bottom">
          <span>Copyright © 2017 All Rights Reserved</span>
        </div>
      </footer>
	</div>
	
    );
}

export default PointMain;