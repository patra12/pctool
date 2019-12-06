<template>
  <div class="settings pt-0">
    <v-row>
      <v-col class="pt-0">
        <v-row>
          <v-col outlined class="bg ">
            <h4 class="font-weight-light">
              Settings
            </h4>
          </v-col>
        </v-row>
        <v-row class="border">
          <v-col class="bg-content">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Company"
                required
              ></v-text-field>
              <v-text-field
                v-model="phone"
                :rules="phoneRules"
                label="Phone"
                required
              >
              </v-text-field>
              <v-text-field
                v-model="telephone"
                :rules="telephoneRules"
                label="Telephone"
                required
              ></v-text-field>
              <v-text-field
                v-model="contact_email"
                :rules="contact_emailRules"
                label="Contact Email"
                required
              ></v-text-field>
              <v-text-field
                v-model="contact_phone"
                :rules="contact_phoneRules"
                label="Contact Phone"
                required
              ></v-text-field>
              <v-text-field
                v-model="contact_telephone"
                :rules="contact_telephoneRules"
                label="Contact Telephone"
                required
              ></v-text-field>
              <v-text-field
                v-model="contact_address"
                :rules="contact_addressRules"
                label="Contact Address"
                required
              ></v-text-field>
              <v-text-field
                v-model="copyrights"
                :rules="copyrightsRules"
                label="Copyrights"
                required
              ></v-text-field>
              <v-textarea
                :rules="copyrightsRules"
                v-model="map_location"
                type="text"
                label="Map Location"
                required
              ></v-textarea>
              <p style="color:blue;">{{ message }}</p>

              <v-btn class="my-5 float-right" large color="primary">
                Update
              </v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Settings',
  layout: 'admin/defaultAdmin',
  data() {
    return {
      valid: true,
      message: '',
      email: '',
      emailRules: [(v) => !!v || 'Title is email'],
      phone: '',
      phoneRules: [(v) => !!v || 'phone is required'],
      telephone: '',
      telephoneRules: [(v) => !!v || 'telephone is required'],
      contact_email: '',
      contact_emailRules: [(v) => !!v || 'contact email is required'],
      contact_phone: '',
      contact_phoneRules: [(v) => !!v || 'contact phone is required'],
      contact_telephone: '',
      contact_telephoneRules: [(v) => !!v || 'contact_telephone is required'],
      contact_address: '',
      contact_addressRules: [(v) => !!v || 'Title is required'],
      copyrights: '',
      copyrightsRules: [(v) => !!v || 'Title is required'],
      map_location: ''
    }
  }
}
</script>
