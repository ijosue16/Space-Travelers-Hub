import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyProfile = () => (
  <>
    <div className="container-fluid d-block d-md-flex gap-2 ">
      <div className="flex-fill">
        <h4 className="">My rockets</h4>
        <ul className="list-group">
          <li className="list-group-item">An  rocket</li>
          <li className="list-group-item">A second  rocket</li>
          <li className="list-group-item">A third  rocket</li>
          <li className="list-group-item">A fourth  rocket</li>
          <li className="list-group-item">And a fifth rocket</li>
        </ul>
      </div>
      <div className="flex-fill">
        <h4 className="">My missions</h4>
        <ul className="list-group">
          <li className="list-group-item">An mission</li>
          <li className="list-group-item">A second mission</li>
          <li className="list-group-item">A third mission</li>
          <li className="list-group-item">A fourth mission</li>
          <li className="list-group-item">And a fifthmission</li>
        </ul>
      </div>
    </div>
  </>
);
export default MyProfile;
