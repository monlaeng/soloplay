import React from 'react';

function Calendar(props) {
    return (
        <div class="calendar-app app-pages app-section">
		<div class="container">
			<div class="pages-title">
				<h3>Calendar</h3>
			</div>
			<div class="entry">
				<div class="head">
					<span class="cd-left">
						<i class="fa fa-chevron-left"></i>
					</span>
					<h5>12 March 2017</h5>
					<span class="cd-right">
						<i class="fa fa-chevron-right"></i>
					</span>
				</div>
				<div class="entry">
					<table>
						<thead>
							<tr>
								<th>Su</th>
								<th>Mo</th>
								<th>Tu</th>
								<th>We</th>
								<th>Th</th>
								<th>Fr</th>
								<th>Sa</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td>1</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
							</tr>
							<tr>
								<td>5</td>
								<td>6</td>
								<td>7</td>
								<td>8</td>
								<td>9</td>
								<td>10</td>
								<td>11</td>
							</tr>
							<tr>
								<td>12</td>
								<td>13</td>
								<td>14</td>
								<td  class="active">15</td>
								<td>16</td>
								<td>17</td>
								<td>18</td>
							</tr>
							<tr>
								<td>19</td>
								<td>20</td>
								<td>21</td>
								<td>22</td>
								<td>23</td>
								<td>24</td>
								<td>25</td>
							</tr>
							<tr>
								<td>26</td>
								<td>27</td>
								<td>28</td>
								<td>29</td>
								<td>30</td>
								<td>31</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
    );
}

export default Calendar;