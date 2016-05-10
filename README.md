# vue-filter-ext
implement a Vue Filter dateFormat.

### demo dateFormat
#####方式一:

`<td>{{item.createAt | dateFormat}}</td>`

#####方式二:

`<td v-text="item.createAt | dateFormat"></td>`

#####方式三:

`<td>{{item.createAt | dateFormat2 'yyyy-MM-dd HH:mm:ss' }}</td>`
