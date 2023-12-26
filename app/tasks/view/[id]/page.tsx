"use client";
import { useEffect, useState } from "react";

import { useParams } from "next/navigation";

import { Task } from "../../types/Task";
import { TasksData } from "../../data/Tasks";

const ViewPage = () => {
  const { id }: { id: string } = useParams();

  const [task, setTask] = useState<Task>();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const taskData = TasksData.find((task) => task.id === Number(id));
        if (taskData) {
          setTask(taskData);
        } else {
          console.error("task is not found");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchTask();
  }, [id]);

  return <div>page</div>;
};

export default ViewPage;
