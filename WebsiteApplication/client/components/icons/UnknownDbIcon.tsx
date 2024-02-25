import React from "react";

interface UnknownDbIconProps extends React.SVGProps<SVGSVGElement> {
}

export const UnknownDbIcon: React.FC<UnknownDbIconProps> = (props) => {
        return (
            <div className="size-5 items-center justify-center">
                <svg viewBox="0 0 452 497" xmlns="http://www.w3.org/2000/svg" {...props}>
                    <defs>
                        <linearGradient id="a">
                            <stop offset="0" stopColor="#0645ad" />
                            <stop offset="1" stopColor="#398fea" />
                        </linearGradient>
                        <linearGradient id="b" x1="117.05355" x2="116.83034" y1="83.525589" y2="62.245369" gradientUnits="userSpaceOnUse" />
                        <linearGradient id="c" x1="117.05355" x2="116.83034" y1="83.525589" y2="62.245369" gradientUnits="userSpaceOnUse" />
                    </defs>
                    <g>
                        <g transform="matrix(1.855166, 0, 0, 1.855166, -261.703613, -234.709869)" style={{ transformOrigin: '261.704px 234.71px' }}>
                            <path className="fill-[#EAEAEA] dark:fill-[#EAEAEA]" d="M 367.696 326.394 C 369.872 326.184 385.303 326.583 385.506 326.582 C 393.686 326.537 401.85 326.091 409.993 325.354 C 425.827 323.92 441.48 321.439 456.749 316.878 C 464.986 314.417 473.003 311.406 480.49 307.114 C 480.6 307.05 480.74 307.039 481.055 306.949 L 481.055 308.054 C 481.055 327.101 481.049 346.148 481.069 365.196 C 481.07 366.561 480.685 367.741 479.912 368.835 C 478.274 371.151 476.092 372.874 473.771 374.435 C 469.356 377.405 464.534 379.556 459.571 381.412 C 451.207 384.538 442.584 386.706 433.829 388.391 C 426.256 389.849 418.625 390.892 410.954 391.635 C 398.922 392.8 386.857 393.321 374.771 392.974 C 367.995 392.78 361.214 392.49 354.459 391.942 C 348.403 391.452 342.37 390.631 336.346 389.811 C 328.571 388.752 320.902 387.132 313.339 385.034 C 306.179 383.048 299.166 380.655 292.558 377.203 C 289.755 375.739 287.066 374.085 284.688 371.98 C 283.891 371.274 283.142 370.505 282.435 369.708 C 281.19 368.306 280.604 366.711 280.609 364.762 C 280.659 345.994 280.639 327.225 280.639 308.457 L 280.639 306.985 C 280.889 307.046 281.074 307.05 281.216 307.131 C 289.116 311.651 297.593 314.747 306.294 317.28 C 315.348 319.916 324.565 321.795 333.886 323.205 C 342.799 324.554 351.748 325.514 360.75 325.997 C 363.022 326.119 365.294 326.256 367.696 326.394" style={{ stroke: 'rgb(186, 218, 85)' }} />
                            <path className="fill-zinc-500 dark:fill-zinc-400" d="M 261.763 432.147 L 261.779 382.397 C 261.78 348.853 261.781 315.309 261.777 281.766 C 261.777 279.011 262.055 276.303 262.938 273.674 C 264.627 268.646 267.735 264.595 271.615 261.089 C 276.839 256.367 282.9 252.976 289.295 250.146 C 297.932 246.324 306.941 243.633 316.121 241.486 C 318.28 240.981 320.45 240.52 333.768 238.358 C 353.222 235.648 361.567 235.106 369.923 234.87 C 384.794 234.451 399.645 234.816 414.453 236.412 C 422.302 237.258 430.113 238.334 437.94 239.94 C 438.568 240.067 439.131 240.052 439.658 240.181 C 444.854 241.45 450.043 242.748 455.237 244.027 C 456.038 244.225 456.852 244.369 457.66 244.538 C 457.66 244.538 457.66 244.542 457.68 244.631 C 457.864 244.755 458.029 244.791 458.193 244.826 C 464.985 246.89 471.604 249.406 477.896 252.702 C 483.213 255.488 488.167 258.801 492.331 263.199 C 496.077 267.154 498.73 271.676 499.664 277.097 C 499.867 278.282 499.97 279.481 499.971 280.683 C 499.986 337.21 499.972 393.737 499.999 450.264 C 500.003 456.819 497.762 462.448 493.546 467.369 C 489.412 472.194 484.287 475.736 478.746 478.722 C 470.347 483.249 461.392 486.312 452.213 488.81 C 442.772 491.379 433.175 493.142 423.496 494.466 C 418.783 495.111 414.04 495.57 409.299 495.977 C 404.877 496.357 400.442 496.593 396.009 496.821 C 392.91 496.98 389.805 497.034 386.702 497.108 C 383.596 497.183 380.489 497.284 377.384 497.263 C 373.909 497.24 370.432 497.153 366.961 496.984 C 362.482 496.767 357.999 496.533 353.533 496.141 C 346.352 495.511 339.191 494.703 332.067 493.554 C 325.668 492.522 319.304 491.325 313.019 489.759 C 304.834 487.72 296.795 485.207 289.077 481.759 C 283.435 479.238 278.063 476.258 273.246 472.341 C 268.75 468.685 265.158 464.359 263.062 458.679 C 262.119 455.982 261.798 453.386 261.757 450.75 C 261.713 447.895 261.719 445.039 261.721 442.065 C 261.727 441.469 261.715 440.99 261.719 440.405 C 261.715 440.084 261.694 439.87 261.709 439.531 C 261.746 437.23 261.763 434.271 261.763 432.147 Z" style={{ stroke: 'rgb(186, 218, 85)' }} />
                            <path className="fill-[#D5D3D8] dark:fill-[#403E46]" d="M 371.14 253.855 C 380.663 253.494 389.904 253.678 399.135 254.21 C 407.758 254.707 416.346 255.568 424.89 256.88 C 434.945 258.425 444.87 260.513 454.56 263.639 C 460.44 265.535 466.172 267.785 471.519 270.922 C 473.928 272.334 476.247 273.885 478.2 275.9 C 479.001 276.727 479.715 277.657 480.36 278.613 C 481.34 280.066 481.326 281.602 480.329 283.043 C 479.672 283.993 478.964 284.928 478.153 285.744 C 475.541 288.373 472.417 290.301 469.159 292.003 C 462.177 295.649 454.749 298.111 447.171 300.155 C 438.019 302.623 428.715 304.299 419.322 305.526 C 405.065 307.388 390.746 308.088 376.378 307.927 C 376.242 307.925 351.422 306.562 350.859 306.505 C 339.723 305.381 328.68 303.69 317.805 300.996 C 311.637 299.468 305.564 297.63 299.664 295.25 C 294.726 293.237 290.153 291.002 286.056 287.889 C 284.384 286.619 282.867 285.202 281.654 283.466 C 280.412 281.689 280.405 279.956 281.628 278.172 C 283.318 275.708 285.619 273.918 288.061 272.286 C 292.719 269.174 297.818 266.956 303.057 265.053 C 307.929 263.283 316.772 260.921 325.159 258.899 C 331.587 257.349 334.496 256.672 345.121 255.155 C 360.518 253.373 364.482 254.002 371.14 253.855 Z" style={{ paintOrder: 'stroke', stroke: 'rgb(0, 0, 0)' }} />
                            <path className="fill-[#D5D3D8] dark:fill-[#403E46]" d="M 367.566 326.386 C 365.294 326.256 363.022 326.119 360.75 325.997 C 351.748 325.514 342.799 324.554 333.886 323.205 C 324.565 321.795 315.348 319.916 306.294 317.28 C 297.593 314.747 289.116 311.651 281.216 307.131 C 281.074 307.05 280.889 307.046 280.639 306.985 L 280.639 308.457 C 280.639 327.225 280.659 345.994 280.609 364.762 C 280.604 366.711 281.19 368.306 282.435 369.708 C 283.142 370.505 283.891 371.274 284.688 371.98 C 287.066 374.085 289.755 375.739 292.558 377.203 C 299.166 380.655 306.179 383.048 313.339 385.034 C 320.902 387.132 328.571 388.751 336.346 389.811 C 342.37 390.631 348.403 391.452 354.459 391.942 C 361.214 392.49 367.995 392.78 374.771 392.974 C 386.857 393.321 398.922 392.8 410.954 391.635 C 418.625 390.892 426.256 389.85 433.829 388.391 C 442.584 386.706 451.207 384.538 459.571 381.412 C 464.534 379.556 469.356 377.405 473.771 374.435 C 476.092 372.874 478.274 371.151 479.912 368.835 C 480.685 367.741 481.07 366.561 481.069 365.196 C 481.049 346.148 481.055 327.101 481.055 308.054 L 481.055 306.949 C 480.74 307.039 480.6 307.05 480.49 307.114 C 473.003 311.406 464.986 314.417 456.749 316.878 C 441.48 321.439 425.827 323.92 409.993 325.354 C 401.85 326.091 393.686 326.537 385.506 326.582 C 385.303 326.583 369.872 326.184 367.566 326.386 Z" style={{ stroke: 'rgb(186, 218, 85)' }}/>
                            <path className="fill-[#D5D3D8] dark:fill-[#403E46]" d="M 424.003 475.322 C 425.607 475.062 427.211 474.807 428.813 474.543 C 437.473 473.115 446.017 471.198 454.371 468.481 C 460.423 466.512 466.34 464.227 471.822 460.938 C 474.5 459.331 477.031 457.535 479.101 455.159 C 480.392 453.677 481.092 452.045 481.086 449.985 C 481.034 431.262 481.055 412.54 481.055 393.817 L 481.055 392.286 C 480.771 392.354 480.628 392.357 480.52 392.42 C 473.121 396.678 465.19 399.647 457.044 402.095 C 443.443 406.182 429.521 408.656 415.418 410.069 C 407.706 410.842 399.959 411.408 392.214 411.69 C 380.419 412.119 368.622 411.911 356.84 411.031 C 347.435 410.329 338.08 409.262 328.783 407.668 C 319.951 406.153 311.231 404.176 302.676 401.493 C 295.226 399.157 287.979 396.342 281.19 392.439 C 281.052 392.36 280.865 392.368 280.639 392.324 L 280.639 393.799 C 280.639 412.522 280.661 431.245 280.606 449.968 C 280.6 451.972 281.233 453.577 282.476 455.043 C 284.084 456.939 286.017 458.454 288.078 459.815 C 293.935 463.686 300.403 466.221 307.028 468.393 C 315.019 471.014 323.196 472.87 331.477 474.311 C 339.076 475.632 346.715 476.66 354.401 477.217 C 361.254 477.715 368.126 478.019 374.995 478.223 C 384.566 478.507 394.14 478.277 403.682 477.495 C 410.388 476.946 417.067 476.075 424.003 475.322 Z" style={{ stroke: 'rgb(186, 218, 85)' }}/>
                        </g>
                        <g transform="matrix(2.215581, 0, 0, 2.215581, -313.451324, -468.097961)" >
                            <path fill="url(#a)" strokeLinecap="round" strokeWidth="1.93733549" d="M126.875 72.920212a9.9776783 9.9776783 0 1 1-19.95535 0 9.9776783 9.9776783 0 1 1 19.95535 0z" transform="matrix(4.56798 0 0 4.56249 -238.5556 52.855392)"/>
                            <path fill="#fff" stroke="#fff" strokeWidth="3.53775477" d="m277.2878 360.81916-.33251.33167 1.33428 6.66299 3.00199.33168c15.96053-19.24912 32.85575-.70752 17.05131 14.94242-5.27871 5.22696-6.63016 10.83884-6.67107 17.65699 0 .61085 2.3028 1.3327 3.00198 1.3327.69918 0 2.66848-.72252 2.66848-1.3327-.88719-5.92497 1.93321-10.25348 5.33679-13.65923 11.07525-11.08209 16.17721-22.35535 6.4104-30.42962-6.91416-5.71596-19.99521-6.66515-31.8014 4.16177zm17.25239 49.85507c-2.75331 1.08552-4.036 2.58372-4.97786 4.97186v.27667c.79669 3.03949 2.00721 4.32069 4.97786 4.97195h.55335c2.60848-.65168 3.96359-2.00479 4.97795-4.97195v-.27667c-.94194-2.60523-2.29714-4.03109-4.97795-4.97186z" fontFamily="Linux Biolinum O" fontSize="8.1874342" fontWeight="700" letterSpacing=".37215605" style={{ lineHeight: '125%', fontFamily: 'Linux Biolinum O Bold' }} wordSpacing="0"/>
                        </g>
                    </g>
                </svg>
            </div>
        );
    }
;
