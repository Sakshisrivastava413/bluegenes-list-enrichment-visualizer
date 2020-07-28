import React, { useEffect, useState } from 'react';

const FilterPanel = ({ data }) => {
	const [filterOptions, setFilterOptions] = useState([]);
	useEffect(() => {
		if (data.filters) setFilterOptions(data.filters.split(','));
	}, []);
	return (
		<div className="filter-panel">
			<div className="title">Filter Panel</div>
			<div className="filter-container">
				<p>Test Correction:</p>
				<div className="control">
					<select name="correction">
						{['Holm-Bonferroni', 'Benjamini Hochberg', 'Bonferroni'].map(
							item => (
								<option value={item} key={item}>
									{item}
								</option>
							)
						)}
					</select>
				</div>
			</div>
			<div className="filter-container">
				<p>Max p-value:</p>
				<div className="control">
					<select name="maxp">
						{[0.05, 0.5, 1.0].map(val => (
							<option value={val} key={val}>
								{val}
							</option>
						))}
					</select>
				</div>
			</div>
			{data && data.filters && (
				<div className="filter-container">
					<p>Filter:</p>
					<div className="control">
						<select name="processFilter">
							{filterOptions.map(val => (
								<option value={val} key={val}>
									{val}
								</option>
							))}
						</select>
					</div>
				</div>
			)}
			<div className="filter-container">
				<p>Results length:</p>
				<div className="control">
					<input
						type="number"
						name="limitResults"
						placeholder="Limit Results"
						min="0"
						max="100"
					/>
				</div>
			</div>
		</div>
	);
};

export default FilterPanel;
