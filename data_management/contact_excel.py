import openpyxl

wb = openpyxl.load_workbook("Graduation_Projects_data_2025.xlsx")
sheet = wb.active

with open("Uncategorized Contacts.txt", "w", encoding="utf-8") as file:
    for i in range(2, 73):
     cell = sheet.cell(row=i, column=13).value

     if cell != None:
        file.write(str(cell) + '\n')