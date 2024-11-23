import React, { useState } from "react";

import { Badge } from "./ui/Badge";
import { LatestPosts } from "./ui/PostCard";
import { Button } from "./ui/Button";
import { Modal } from "./ui/Modal";

import CozyHome from "../assets/realco.images/Cozy.png";
import TinyHome from "../assets/realco.images/Tiny.png";
import CrownHome from "../assets/realco.images/Crown.png";

const posts = [
  {
    img: CozyHome,
    badge: <Badge text="Trends" className={"bg-[#FAE8E1]"} />,
    date: new Date().toLocaleDateString(),
    description: "The 9 best homes in New York",
    paragraph:
      "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.",
    label: "Read more >",
  },

  {
    img: TinyHome,
    badge: <Badge text="DIY" className={"bg-[#FAE8E1]"} />,
    date: new Date().toLocaleDateString(),
    description: "How to easily buy a house with Realco",
    paragraph:
      "Praesent nec felis nisl. Phasellus eget lacus a metus fringilla fermentum sit amet.",
    label: "Read more >",
  },
  {
    img: CrownHome,
    badge: <Badge text="DIY" className={"bg-[#FAE8E1]"} />,
    date: new Date().toLocaleDateString(),
    description: "Renting houses - complete guide",
    paragraph:
      "Nunc in bibendum leo, gravida scelerisque quam nulla interdum tellus a turpis.",
    label: "Read more >",
  },
];

export const LatestPostList = () => {
  const [selectedPost, setSelectedpost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (post) => {
    setSelectedpost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedpost(null);
    setIsModalOpen(false);
  };
  return (
    <div className="bg-[#F5F5F2]">
      <div className="container">
        <div className="text-start pt-[128px] pb-[80px]">
          <Badge text="Blog" />
          <h1 className="text-[48px] font-bold text-[#2A2C1F]">Latest posts</h1>
          <div className="flex place-content-between">
            <p className="w-[710px] h-[54px] text-[#65665C]">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae. Praesent efficitur nibh massa morbi
              sagittis ornare dui in ornare.
            </p>
            <Button
              text={"View all"}
              className=" px-[25px] bg-[#FFF] !text-gray-700"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 pb-[128px]">
          {posts.map((post, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(post)}
              className="cursor-pointer"
            >
              <LatestPosts {...post} />
            </div>
          ))}
        </div>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          {selectedPost && (
            <div>
              <img
                src={selectedPost.img}
                alt={selectedPost.description}
                className="w-full h-52 object-cover rounded-md"
              />

              <div className="mt-4">
                <div className="mb-2">{selectedPost.badge}</div>
                <h2 className="text-2xl font-bold">
                  {selectedPost.description}
                </h2>
                <p className="text-gray-700 mt-2">{selectedPost.paragraph}</p>
                <p className="text-gray-500 mt-4 text-sm">
                  Date: {selectedPost.Date}
                </p>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};
