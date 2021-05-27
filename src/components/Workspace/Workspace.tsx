import { FC } from "react";
import styled from "styled-components";
import WorkspaceCard from "./WorkspaceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination, Mousewheel } from "swiper/core";
SwiperCore.use([Pagination, Mousewheel]);

export const Workspace: FC = () => {
  return (
    <div>
      <h4 className="mb-3 text-lg font-semibold">Workspaces</h4>
      <Swiper
        slidesPerView={4}
        direction={"horizontal"}
        spaceBetween={5}
        freeMode={true}
        mousewheel={true}
      >
        <SwiperSlide>
          <WorkspaceCard></WorkspaceCard>
        </SwiperSlide>
        <SwiperSlide>
          <WorkspaceCard></WorkspaceCard>
        </SwiperSlide>
        <SwiperSlide>
          <WorkspaceCard></WorkspaceCard>
        </SwiperSlide>
        <SwiperSlide>
          <WorkspaceCard></WorkspaceCard>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Workspace;
