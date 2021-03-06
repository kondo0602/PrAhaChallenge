import React, { useRef } from 'react';

const TodoForm = (props) => {
  const newTask = useRef('');

  const doSubmit = (e) => {
    e.preventDefault('');
    const task = newTask.current.value;
    if (!task) {
      return;
    }
    props.onTaskSubmit(task);
    newTask.current.value = '';
    return;
  };

  return (
    <div className="commentForm vert-offset-top-2">
      <hr />
      <div className="clearfix">
        <form
          className="todoForm form-horizontal"
          onSubmit={(e) => doSubmit(e)}
        >
          <div className="form-group">
            <label htmlFor="task" className="col-md-2 control-label">
              Task
            </label>
            <div className="col-md-10">
              <input
                type="text"
                id="task"
                ref={newTask}
                className="form-control"
                placeholder="What do you need to do?"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-2 text-right">
              <input
                type="submit"
                value="Save Item"
                className="btn btn-primary"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
