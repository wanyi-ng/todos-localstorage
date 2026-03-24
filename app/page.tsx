import TodoForm from "@/components/TodoForm"

export const metadata = {
  title: "Todo App",
  description: "Add and manage your tasks. Saved to local storage.",
  keywords: ["todo", "todos", "todo app", "todos app", "tasks", "task"],
}

export default async function TodoPage() {
  return (
    <main className="flex flex-col h-full min-h-screen p-24">
      <TodoForm />
    </main>
  )
}