export const Question = ({ fill = 'black' }) => {
    return (
        <div style={{ marginRight: '3px', height: '20px' }}>
            <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.642 12.682H10.568C10.568 9.926 14.936 9.458 14.936 5.298C14.936 2.23 12.232 0.488 8.332 0.488C4.822 0.488 2.378 1.84 0.974 3.972L4.12 5.818C4.952 4.622 6.226 3.894 7.89 3.894C9.58 3.894 10.698 4.7 10.698 5.974C10.698 8.236 6.642 9.042 6.642 12.682ZM8.618 19.208C10.074 19.208 11.114 18.142 11.114 16.842C11.114 15.516 10.074 14.528 8.618 14.528C7.162 14.528 6.122 15.516 6.122 16.842C6.122 18.142 7.162 19.208 8.618 19.208Z" fill={fill} />
            </svg>
        </div>
    )
}