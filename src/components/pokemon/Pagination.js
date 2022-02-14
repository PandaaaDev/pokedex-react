import React from 'react';

export const Pagination = ({ goToPreviousPage, goToNextpage }) => {
	return (
		<div className='pagination'>
			{goToPreviousPage && (
				<button className='prev-btn' onClick={goToPreviousPage}>
					previous
				</button>
			)}
			{goToNextpage && (
				<button className='next-btn' onClick={goToNextpage}>
					next
				</button>
			)}
		</div>
	);
};
