import React from "react";
import RoomFilter from "./roomFilter";
import RoomList from "./roomList";
import { RoomConsumer } from "../context";
import Loading from "./loading";

const RoomContainer = () => {
    return (
        <RoomConsumer>
            {(value) => {
                const { rooms, sortedRooms, loading } = value;

                if (loading) {
                    return <Loading />;
                }
                return (
                    <>
                        <RoomFilter rooms={rooms} />
                        <RoomList rooms={sortedRooms} />
                    </>
                );
            }}
        </RoomConsumer>
    );
};

export default RoomContainer;
