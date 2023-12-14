import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.span`
	display: inline-block;
	padding: 5px 4px 2px;
	cursor: pointer;
`;

type Props = {
	onClick?: () => void;
};

export const AddIcon: React.FC<Props> = ({ onClick }) => (
	<IconWrapper onClick={onClick}>
		<svg fill='none' height='13' viewBox='0 0 13 13' width='13' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M3.25 6.5H9.75M6.5 9.75V3.25'
				stroke='#333E48'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='1.5'
			/>
		</svg>
	</IconWrapper>
);
export const DeleteIcon: React.FC<Props> = ({ onClick }) => (
	<IconWrapper onClick={onClick}>
		<svg fill='none' height='13' viewBox='0 0 13 13' width='13' xmlns='http://www.w3.org/2000/svg'>
			<g clipPath='url(#clip0_6131_501)'>
				<path
					d='M11.375 3.23917C9.57125 3.06042 7.75667 2.96833 5.9475 2.96833C4.875 2.96833 3.8025 3.0225 2.73 3.13083L1.625 3.23917M4.60417 2.69208L4.72333 1.9825C4.81 1.46792 4.875 1.08333 5.79042 1.08333H7.20958C8.125 1.08333 8.19542 1.48958 8.27667 1.98792L8.39583 2.69208M10.2104 4.95083L9.85833 10.4054C9.79875 11.2558 9.75 11.9167 8.23875 11.9167H4.76125C3.25 11.9167 3.20125 11.2558 3.14167 10.4054L2.78958 4.95083M5.59542 8.9375H7.39917M5.14583 6.77083H7.85417'
					stroke='#333E48'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='1.5'
				/>
			</g>
			<defs>
				<clipPath id='clip0_6131_501'>
					<rect fill='white' height='13' width='13' />
				</clipPath>
			</defs>
		</svg>
	</IconWrapper>
);

export const TrashIcon = () => (
	<svg fill='none' height='25' viewBox='0 0 25 25' width='25' xmlns='http://www.w3.org/2000/svg'>
		<path
			clipRule='evenodd'
			d='M19.5312 25C20.1823 25 20.7357 24.7721 21.1914 24.3164C21.6471 23.8607 21.875 23.3073 21.875 22.6562V4.6875H23.1445C23.2096 4.6875 23.2747 4.65495 23.3398 4.58984C23.4049 4.52474 23.4375 4.45964 23.4375 4.39453V4.29688C23.4375 3.97135 23.3236 3.69466 23.0957 3.4668C22.8678 3.23893 22.5911 3.125 22.2656 3.125H17.9688L16.3086 0.927734C15.8529 0.309245 15.2344 0 14.4531 0H10.5469C9.76562 0 9.14714 0.309245 8.69141 0.927734L7.03125 3.125H2.73438C2.40885 3.125 2.13216 3.23893 1.9043 3.4668C1.67643 3.69466 1.5625 3.97135 1.5625 4.29688V4.39453C1.5625 4.45964 1.59505 4.52474 1.66016 4.58984C1.72526 4.65495 1.79036 4.6875 1.85547 4.6875H3.125V22.6562C3.125 23.3073 3.35286 23.8607 3.80859 24.3164C4.26432 24.7721 4.81771 25 5.46875 25H19.5312ZM16.0156 3.12501H8.98438L9.91211 1.85548C10.0749 1.66016 10.2865 1.56251 10.5469 1.56251H14.4531C14.7135 1.56251 14.9251 1.66016 15.0879 1.85548L16.0156 3.12501ZM19.5312 23.4375H5.46875C5.24089 23.4375 5.05371 23.3643 4.90723 23.2178C4.76074 23.0713 4.6875 22.8841 4.6875 22.6562V4.68749H20.3125V22.6562C20.3125 22.8841 20.2393 23.0713 20.0928 23.2178C19.9463 23.3643 19.7591 23.4375 19.5312 23.4375ZM12.6953 21.0938C12.8581 21.0938 12.9964 21.0368 13.1104 20.9229C13.2243 20.8089 13.2812 20.6706 13.2812 20.5078V7.61719C13.2812 7.45443 13.2243 7.31609 13.1104 7.20215C12.9964 7.08822 12.8581 7.03126 12.6953 7.03126H12.3047C12.1419 7.03126 12.0036 7.08822 11.8896 7.20215C11.7757 7.31609 11.7188 7.45443 11.7188 7.61719V20.5078C11.7188 20.6706 11.7757 20.8089 11.8896 20.9229C12.0036 21.0368 12.1419 21.0938 12.3047 21.0938H12.6953ZM8.78906 21.0938C8.95182 21.0938 9.09017 21.0368 9.2041 20.9229C9.31803 20.8089 9.375 20.6706 9.375 20.5078V7.61719C9.375 7.45443 9.31803 7.31609 9.2041 7.20215C9.09017 7.08822 8.95182 7.03126 8.78906 7.03126H8.39844C8.23568 7.03126 8.09733 7.08822 7.9834 7.20215C7.86947 7.31609 7.8125 7.45443 7.8125 7.61719V20.5078C7.8125 20.6706 7.86947 20.8089 7.9834 20.9229C8.09733 21.0368 8.23568 21.0938 8.39844 21.0938H8.78906ZM16.6016 21.0938C16.7643 21.0938 16.9027 21.0368 17.0166 20.9229C17.1305 20.8089 17.1875 20.6706 17.1875 20.5078V7.61719C17.1875 7.45443 17.1305 7.31609 17.0166 7.20215C16.9027 7.08822 16.7643 7.03126 16.6016 7.03126H16.2109C16.0482 7.03126 15.9098 7.08822 15.7959 7.20215C15.682 7.31609 15.625 7.45443 15.625 7.61719V20.5078C15.625 20.6706 15.682 20.8089 15.7959 20.9229C15.9098 21.0368 16.0482 21.0938 16.2109 21.0938H16.6016Z'
			fill='white'
			fillRule='evenodd'
		/>
	</svg>
);

export const PencilIcon = () => (
	<svg fill='none' height='25' viewBox='0 0 25 25' width='25' xmlns='http://www.w3.org/2000/svg'>
		<path
			clipRule='evenodd'
			d='M1.30148 24.9926L6.87684 24.3731L24.0847 7.16528C25.305 5.94486 25.305 3.96618 24.0846 2.74587L22.254 0.915293C21.0337 -0.305074 19.0551 -0.305121 17.8346 0.915293L0.626805 18.1231L0.00734773 23.6984C-0.0755741 24.4448 0.555185 25.0755 1.30148 24.9926ZM20.5412 8.49893L16.501 4.45869L18.9395 2.02016C19.5501 1.40957 20.5385 1.40947 21.1492 2.02016L22.9797 3.85073C23.5904 4.46137 23.5904 5.4497 22.9797 6.06043L20.5412 8.49893ZM8.49605 20.5441V18.8476H6.1523V16.5039H4.45577L15.3961 5.56352L19.4364 9.60376L8.49605 20.5441ZM3.27889 23.2008L1.79912 21.721L2.11922 18.8404L3.08858 17.871H4.78512V20.2148H7.12886V21.9113L6.1595 22.8807L3.27889 23.2008Z'
			fill='white'
			fillRule='evenodd'
		/>
	</svg>
);