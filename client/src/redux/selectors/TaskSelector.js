export const filterTasks = (tasks, filter) => {
 return tasks.filter((task) =>
   task.title.toLowerCase().includes(filter.toLowerCase())
 )
}