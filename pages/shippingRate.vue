<template>
  <div class="container shiping rate py-5">
    <header>
      <h1>Shipping carriers and goods rates</h1>
    </header>
    <main>
      <div class="py-5">
        <p>
          Duis convallis convallis tellus id interdum velit laoreet.
          Id nibh tortor id aliquet lectus proin. Scelerisque purus semper
          eget duis at tellus at. Sed cras ornare arcu dui vivamus arcu
          felis bibendum ut.convallis tellus id interdum velit laoreet.
          Id nibh tortor id aliquet lectus proin. Scelerisque purus semper
          eget duis at tellus at. Sed cras ornare arcu dui vivamus arcu
          felis bibendum ut.
        </p>
        <table class="linkTable">
          <tr id="topRow">
            <td colspan="2">Shipping Heading</td>
            <td>Basic</td>
            <td>Advance</td>
          </tr>
          <tr>
            <td rowspan="2">RHFU</td>
            <td>Domestic shipping</td>
            <td>Up to 20%</td>
            <td>Up to 80%</td>
          </tr>
          <tr>
            <td>International shipping</td>
            <td>Up to 28%</td>
            <td>Up to 97%</td>
            <!-- <th>Country</th> -->
          </tr>
          <tr>
            <td rowspan="3">ALFALFA</td>
            <td>Domestic shipping</td>
            <td>Up to 18%</td>
            <td>Up to 45%</td>
          </tr>
          <tr>
            <td>International shipping</td>
            <td>Up to 23%</td>
            <td>Up to 68%</td>
            <!-- <th>Country</th> -->
          </tr>
          <tr>
            <td>Standard shipping</td>
            <td>Up to 8%</td>
            <td>Up to 57%</td>
            <!-- <th>Country</th> -->
          </tr>
          <tr>
            <td rowspan="2">STARW</td>
            <td>Domestic shipping</td>
            <td>Up to 5%</td>
            <td>Up to 26%</td>
          </tr>
          <tr>
            <td>Standard shipping</td>
            <td>Up to 65%</td>
            <td>Up to 98%</td>
            <!-- <th>Country</th> -->
          </tr>
          <tr>
            <td>ILIKN</td>
            <td>International shipping</td>
            <td>Up to 12%</td>
            <td>Up to 35%</td>
          </tr>
          <tr>
            <td rowspan="4">TNROF</td>
            <td>Domestic shipping</td>
            <td>Up to 32%</td>
            <td>Up to 56%</td>
          </tr>
          <tr>
            <td>Standard shipping</td>
            <td>Up to 21%</td>
            <td>Up to 82%</td>
            <!-- <th>Country</th> -->
          </tr>
          <tr>
            <td>Normal shipping</td>
            <td>Up to 45%</td>
            <td>Up to 62%</td>
            <!-- <th>Country</th> -->
          </tr>
          <tr>
            <td>International shipping</td>
            <td>Up to 12%</td>
            <td>Up to 42%</td>
            <!-- <th>Country</th> -->
          </tr>
        </table>
      </div>
    </main>
  </div>
</template>
<style scoped>
table.linkTable {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  border-collapse: collapse;
  /* border-top-left-radius: 10px;
  border-top-right-radius: 10px; */
  overflow: hidden;
}
#topRow td {
  /* background: #60bb23;
  text-align: center; */
  font-size: 20px;
  font-weight: 600;
  /* color: #fff; */
}

.linkTable td,
.linkTable th {
  border: 1px solid #bebebe;
  text-align: left;
  padding: 8px;
}

.linkTable tr:nth-child(even) {
  background-color: #f3f3f3;
}
</style>