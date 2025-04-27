import openpyxl
import json
import urllib

def main():
     
    wb = openpyxl.load_workbook("Graduation_Projects_data_2025.xlsx")
    sheet = wb.active

    projects = []
    project_template = {
            "ID": None,
            "Email": None,
            "Name": None,
            "Campus": None,
            "Section": None, 
            "Department": None,
            "Project Title": None,
            "Students Names with IDs": None,
            "Supervisor Name": None,
            "Full Project Description": None,
            "Project Field": None,
            "Project Poster": None,
            "Additional Project Images": None,
            "Contact Methods": {
                    "email": "",
                    "phone": "",
                    "LinkedIn": ""
            }
    }

    id = 1
    for row in sheet.iter_rows(min_row=2, max_row=72, max_col=13, values_only=True):
            
            email = row[0]
            name = row[1]
            campus = row[2]
            section = row[3]
            department = row[4]
            project_title = row[5]
            stds_names_ids = row[6]
            supervisor_name = row[7]
            full_project_desc = row[8]
            project_feilds = row[9]
            project_poster = row[10]
            additional_images = row[11]
            contact_methods = row[12]

            project = project_template.copy()

            project["ID"] = id
            project["Email"] = email
            project["Campus"] = campus
            project["Section"] = section
            project["Name"] = name
            project["Department"] = department
            project["Project Title"] = project_title
            project["Supervisor Name"] = supervisor_name
            project["Full Project Description"] = full_project_desc
            project["Project Poster"] = urls_to_txt(project_poster)
            project["Project Field"] = project_feilds.split(",")
            project["Students Names with IDs"] = names_to_dict(stds_names_ids, name, email)

            if additional_images != None:
                project["Additional Project Images"] = additional_images 
            else:
                project["Additional Project Images"] = None

            projects.append(project)
            id += 1

    with open("full_projects.json", "w", encoding="utf-8") as json_file:
         json.dump(projects, json_file, indent=4, ensure_ascii=False)
            



def names_to_dict(names, leader_name, email):
    names_list = []
    name_template = {
         "name": None,
         "id": None
    }
    
    splited_names = names.split(",")

    for name in splited_names:
        name_id = name.split(":")

        name_dict = name_template.copy()

        
        name_dict["name"] = name_id[0].strip()

        if(len(name_id)  == 2):
            name_dict["id"] = name_id[1].strip()
        
        names_list.append(name_dict)

    leader_id = email[0:email.find("@")].strip()
    leader_name = leader_name.strip()

    if any(d["name"] == leader_name or d["id"] == leader_id  for d in names_list):
        return names_list
    else:
         name_dict = name_template.copy()

         name_dict["name"] = leader_name
         name_dict["id"] = leader_id

         names_list.append(name_dict)   
         return names_list
    

def urls_to_txt(url):

    decoded = urllib.parse.unquote(url)
    decoded = decoded.split('/')[-1]
    
    if ".pdf" in decoded:
        decoded = decoded[:decoded.rfind(".")] + "-page-00001" + decoded[decoded.rfind("."):]
        decoded = decoded.replace('.pdf', '.jpg')
    return ("/assets/" + decoded)

if __name__ == "__main__":
     main()