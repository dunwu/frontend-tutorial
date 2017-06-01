package org.zp.tents.web.api;

public class PersonDTO {
        String name;
        int age;

        public PersonDTO() {
            name = "default";
            age = 0;
        }

        public PersonDTO(String name, int age) {
            this.name = name;
            this.age = age;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public int getAge() {
            return age;
        }

        public void setAge(int age) {
            this.age = age;
        }
    }