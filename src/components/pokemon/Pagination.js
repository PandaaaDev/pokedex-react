import React from 'react';

export const Pagination = ({ goToPreviousPageUrl, goToNextpage }) => {
	return (
		<div className='pagination'>
			<button className='prev-btn' onClick={goToPreviousPageUrl}>
				previous
			</button>
			<button className='next-btn' onClick={goToNextpage}>
				next
			</button>
		</div>
	);
};
