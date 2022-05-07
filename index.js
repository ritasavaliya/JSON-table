const data = {
  columns: {
    id: 'Id',
    customer_id: 'DEB-Auto',
    name: 'Name',
    labelName: 'Label',
    address: 'Address',
    email: 'Email',
    last_update: 'Last Update',
  },
  searchableColumns: ['customer_id', 'name', 'address'],
  sortableColumns: [
    'id',
    'customer_id',
    'name',
    'address',
    'email',
    'last_update',
  ],
  organizations: [
    {
      id: 731,
      customer_id: '1427',
      name: 'Test ajay',
      address: 'PosBill GmbH, Brunnengasse, Kehlbach, Germany',
      email: null,
      last_update: '2022-03-30T07:11:08.000000Z',
      labelName: 'customer',
      labelColor: 'green',
      orgId: 867,
      bankaccount_info2: null,
    },
    {
      id: 763,
      customer_id: '1417',
      name: 'test-QA1',
      address:
        'German Experts Car Maintenance - Abu Dhabi - United Arab Emirates',
      email: null,
      last_update: '2022-03-30T07:02:32.000000Z',
      labelName: '',
      labelColor: null,
      orgId: 883,
      bankaccount_info2: null,
    },
    {
      id: 755,
      customer_id: '1418',
      name: 'Atest4',
      address: 'Gera, Germany',
      email: null,
      last_update: '2022-03-30T07:02:06.000000Z',
      labelName: '',
      labelColor: null,
      orgId: 879,
      bankaccount_info2: null,
    },
    {
      id: 751,
      customer_id: '1419',
      name: 'Atest2',
      address: null,
      email: null,
      last_update: '2022-03-30T07:01:46.000000Z',
      labelName: '',
      labelColor: null,
      orgId: 877,
      bankaccount_info2: null,
    },
    {
      id: 730,
      customer_id: '1426',
      name: 'test sevDesk m1',
      address: 'PosBill GmbH, Brunnengasse, Kehlbach, Germany',
      email: null,
      last_update: '2022-03-30T07:00:42.000000Z',
      labelName: '',
      labelColor: null,
      orgId: 866,
      bankaccount_info2: null,
    },
    {
      id: 747,
      customer_id: '1432',
      name: 'test-shivani3',
      address: 'Germany',
      email: 'shivani@test.com',
      last_update: '2022-03-30T06:59:58.000000Z',
      labelName: '',
      labelColor: null,
      orgId: 875,
      bankaccount_info2: null,
    },
    {
      id: 862,
      customer_id: '1485',
      name: 'Gellert Imbiss',
      address: 'Quellenstrasse 77 , Wien, 1100, AT Avusturya',
      email: 'sales@gellertimbiss.com',
      last_update: '2022-03-02T09:14:07.000000Z',
      labelName: 'customer',
      labelColor: 'green',
      orgId: 947,
      bankaccount_info2: null,
    },
    {
      id: 863,
      customer_id: '1486',
      name: 'test1.0',
      address: '',
      email: 'ngvdungit2@maildrop.cc',
      last_update: '2022-03-09T09:24:57.000000Z',
      labelName: 'customer',
      labelColor: 'green',
      orgId: 948,
      bankaccount_info2: null,
    },
    {
      id: 859,
      customer_id: '1482',
      name: 'R5',
      address: 'Sinabelkirchen 8, Sinabelkirchen, 8261,',
      email: 'weberhofer.andreas@gmail.com',
      last_update: '2022-03-02T07:08:32.000000Z',
      labelName: 'customer',
      labelColor: 'green',
      orgId: 943,
      bankaccount_info2: null,
    },
    {
      id: 860,
      customer_id: '1483',
      name: 'Onassi',
      address: 'Langemarckstr. 171, Bremen, 28199, DE Deutschland',
      email: 'lpoetsch@rea.de',
      last_update: '2022-03-02T07:30:34.000000Z',
      labelName: 'customer',
      labelColor: 'green',
      orgId: 945,
      bankaccount_info2: null,
    },
    {
      id: 861,
      customer_id: '1484',
      name: 'nguyen',
      address: '',
      email: 'ngvdung90it@maildrop.cc',
      last_update: '2022-03-02T08:46:46.000000Z',
      labelName: 'customer',
      labelColor: 'green',
      orgId: 946,
      bankaccount_info2: null,
    },
    {
      id: 856,
      customer_id: '1479',
      name: 'Ruchita 6291',
      address: '3B, Innenstadt, 14473, Germany',
      email: 'ruchitas@scaletech.xyz',
      last_update: '2022-03-02T06:51:40.000000Z',
      labelName: 'customer',
      labelColor: 'green',
      orgId: 940,
      bankaccount_info2: null,
    },
    {
      id: 857,
      customer_id: '1480',
      name: 'Alois Geyer',
      address: 'Mitterfeldgasse 21, Ziersdorf, 3710,',
      email: 'aloisgeyer@gmx.at',
      last_update: '2022-03-02T07:05:46.000000Z',
      labelName: 'customer',
      labelColor: 'green',
      orgId: 941,
      bankaccount_info2: null,
    },
    {
      id: 858,
      customer_id: '1481',
      name: 'Alois Geyer',
      address: 'Mitterfeldgasse 21, Ziersdorf, 3710,',
      email: 'aloisgeyer@gmx.at',
      last_update: '2022-03-02T07:07:31.000000Z',
      labelName: 'customer',
      labelColor: 'green',
      orgId: 942,
      bankaccount_info2: null,
    },
    {
      id: 849,
      customer_id: '1475',
      name: 'R1',
      address: '',
      email: '',
      last_update: '2022-03-01T12:29:01.000000Z',
      labelName: 'customer',
      labelColor: 'green',
      orgId: 936,
      bankaccount_info2: null,
    },
  ],
};

let thdata = '';
let adddata = document.getElementById('tablehead');
let newheaderdata = data['columns'];
let searchdata = data['searchableColumns'];
let sortdata = data['sortableColumns'];
let previouaSearch = [];
let searchResult = [];
let newbodydata = data['organizations'];
let prevId = '';
let prevValue = false;

// table header
Object.keys(newheaderdata).forEach((colvalue) => {
  thdata += `<th>${newheaderdata[colvalue]}${
    sortdata.includes(colvalue)
      ? `<button id = '${newheaderdata[colvalue]}'onclick = 'sortdataFunction("${colvalue}")' >sort</button>`
      : ''
  }</th>`;
});
adddata.innerHTML += thdata;
adddata.innerHTML += `<tr id="search"></tr>`;

//table row
let tddata = '';
let adddata1 = document.getElementById('tabledata');

newbodydata.forEach((adduserdata) => {
  let coldata = '';
  coldata = creatNewRow(adduserdata);
  adddata1.innerHTML += `<tr class="row-data">${coldata}</tr>`;
});

// dynamic searchbox
let searchrow = document.getElementById('search');
Object.keys(newheaderdata).forEach((searchcol, index) => {
  let searchbar = searchdata.findIndex((ele) => ele === searchcol);
  if (searchbar >= 0) {
    searchrow.innerHTML += `<td><input type = "search" placeholder = "${searchcol}" id = "${searchcol}" onkeyup = "searchFunction(this.value,'${searchcol}')"></td>`;
  } else {
    searchrow.innerHTML += `<td></td>`;
  }
});
newbodydata;
//searchbox function
function searchFunction(value, key) {
  const orgData = [...newbodydata];
  newbodydata = orgData.filter((org) => {
    if (org[key] === null) {
      return;
    }
    return org[key].includes(value);
  });
  searchResult = newbodydata;
  adddata1.innerHTML = '';
  newbodydata.forEach((search) => {
    let searchRow = '';
    searchRow = creatNewRow(search);
    adddata1.innerHTML += searchRow;
  });
  if (newbodydata.length > 0) {
    previouaSearch = newbodydata;
  }
}
//sorting function
function sortdataFunction(colvalue) {
  if (prevId === colvalue) {
    prevValue = !prevValue;
  } else {
    prevId = colvalue;
    prevValue = false;
  }
  const sortData = newbodydata.sort((a, b) => {
    let fa = (a[colvalue] || '').toString().toLowerCase(),
      fb = (b[colvalue] || '').toString().toLowerCase();
    if (!prevValue) {
      return fa == fb ? 0 : fa > fb ? 1 : -1;
    } else {
      return fa == fb ? 0 : fa < fb ? 1 : -1;
    }
    return 0;
  });
  let tableRows = document.getElementsByClassName('row-data');
  adddata1.innerHTML = '';
  sortData.forEach((sort) => {
    let sortedRowData = creatNewRow(sort);
    adddata1.innerHTML += sortedRowData;
  });
  tableRows = sortData;
}
//newrow function
function creatNewRow(data) {
  let rowDetail = '';
  Object.keys(newheaderdata).forEach((item) => {
    rowDetail += `<td>${data[item]}</td>`;
  });
  return rowDetail;
}
