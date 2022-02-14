import React from 'react';
import './Pagination.scss';

export const Pagination = ({ goToPreviousPage, goToNextpage }) => {
	return (
		<div className='pagination'>
			{goToPreviousPage && (
				<button className='pagination-btn prev-btn' onClick={goToPreviousPage}>
					Go to previous page
				</button>
			)}
			{goToNextpage && (
				<button className='pagination-btn next-btn' onClick={goToNextpage}>
					Go to next page
				</button>
			)}
		</div>
	);
};
