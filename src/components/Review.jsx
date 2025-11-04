/**
 * @copyright 2025 KhaiTR
 * @license Apache-2.0
 */

/**
 * Components
 */
import ReviewCard from "./ReviewCard.jsx";

/**
 * Node modules
 */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

/**
 * Register gsap plugins
 * */
gsap.registerPlugin(useGSAP, ScrollTrigger);

import React from 'react';

const reviews = [
    {
        content: "Dịch vụ tuyệt vời! Đội ngũ hỗ trợ rất chuyên nghiệp và nhiệt tình. Sản phẩm hoạt động ổn định, đáp ứng đúng nhu cầu của công ty chúng tôi.",
        name: "Nguyễn Văn Minh",
        imgSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        company: "TechViet Solutions"
    },
    {
        content: "Sau 6 tháng sử dụng, tôi có thể khẳng định đây là khoản đầu tư đúng đắn. ROI tăng 150%, quy trình làm việc được tối ưu hóa đáng kể.",
        name: "Lê Quang Đức",
        imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        company: "StartUp Hub Vietnam"
    },
    {
        content: "Customer support phản hồi nhanh chóng, giải quyết vấn đề hiệu quả. Sản phẩm được cập nhật thường xuyên với những tính năng mới hữu ích.",
        name: "Phạm Mai Linh",
        imgSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        company: "E-commerce Plus"
    },
    {
        content: "Giao diện trực quan, dễ sử dụng ngay cả với người không chuyên về IT. Tính năng báo cáo chi tiết giúp chúng tôi đưa ra quyết định kinh doanh chính xác.",
        name: "Vũ Thanh Tùng",
        imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        company: "Retail Chain Vietnam"
    },
    {
        content: "Tích hợp dễ dàng với hệ thống hiện tại của công ty. API documentation rõ ràng, developer team hỗ trợ implementation rất tốt.",
        name: "Hoàng Thị Lan",
        imgSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
        company: "FinTech Innovation"
    }
]
const Review = () => {
    useGSAP(() => {
        gsap.to('.scrub-slide', {
            scrollTrigger: {
                trigger: '.scrub-slide',
                start: 'top 90%',
                end: 'bottom -50%',
                scrub: 1,
            },
            x: '-1000',
        })
    })
    return (
        <section
            id="reviews"
            className={"section overflow-hidden"}
            >
            <div
                className={"container"}
            >
                <h2 className={"headline-2 mb-8 reveal-up"}>
                    What our customers say
                </h2>
                <div
                    className="scrub-slide flex items-center gap-3 w-fit"
                >
                    {reviews.map(({content,name,imgSrc,company},key) => (
                        <ReviewCard
                            content={content}
                            name={name}
                            imgSrc={imgSrc}
                            company={company}
                            key={key}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Review;