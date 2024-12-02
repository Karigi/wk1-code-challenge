------------Challenge 1: Student Grade Generator-------
StudentGradeGenerator.js file contains a program that prompts
a user to input a student's marks and grade it as follows:
A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
If the user enters a value that is outside the range specified above
or a value that is not a number an error message appears telling the 
user to input marks in the range of 0-100. The program will keep prompting 
the user to input the marks unless they type in exit to exit the program.
-------------------------------------------------------

-----------------Challenge 2: Speed Detector-----------------------
SpeedDetector.js file contains a program where a user is prompted to enter the speed.
This speed is passed to a function that checks if the speed is greater than or less than
70. If the speed is less than or equal to 70, the function prints 'OK'. If the speed
is greater than 70, for every 5 km/h above 70, it assigns 1 demerit point. If the
total number of demerit points is greater than 12, it prints 'license suspended'. The function 
also checks if a valid speed has been entered. If not, it asks the user to enter a valid speed.
--------------------------------------------------------------------

----------------Challenge 3: Net salary calculator------------------------------
This program calculates an individual’s Net Salary based on their Basic Salary and Benefits.
It considers the following:
Gross Salary: Sum of Basic Salary and Benefits.
PAYE Tax: Calculated based on Kenya Revenue Authority (KRA) tax bands.
NHIF Deductions: Based on gross salary using the rates from NHIF.
NSSF Deductions: 6% of basic salary.
The program works as follows:
Input:
    User enters:
        Basic Salary
        Benefits
        Calculations:
            Gross Salary = Basic Salary + Benefits
            PAYE Tax: Computed using KRA tax bands.
            NHIF Deductions: Based on NHIF rates for the given gross salary.
            NSSF Deductions: 6% of basic salary
            Net Salary:
                Net Salary = Gross Salary - (PAYE Tax + NHIF + NSSF)
Output:
    Gross Salary
    PAYE Tax
    NHIF Deduction
    NSSF Deduction
    Net Salary
--------------------------------------------------------------------------
