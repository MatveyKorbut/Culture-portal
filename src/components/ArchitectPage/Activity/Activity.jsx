import React from 'react';
import idGenerator from 'react-id-generator';

const activity = ({ work }) => {
  const data = Object.values(JSON.parse(work.internal.content));
  const works = data.map(building => (
    <tr key={idGenerator()}>
      <td>
        {building.title}
      </td>
      <td>
        {building.date}
      </td>
    </tr>
  ));
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Работа</th>
            <th>Дата создания</th>
          </tr>
        </thead>
        <tbody>
          {works}
        </tbody>
      </table>
    </div>
  );
};

export default activity;
