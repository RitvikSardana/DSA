#include <iostream>
#include <vector>
#include <string>
#include<bits/stdc++.h>
using namespace std;

int main()
{
	vector<int> v;
	v.push_back(1);
	v.emplace_back(2);
	v.emplace_back(4);
	v.emplace_back(5);
	
	for (auto it=v.begin(); it!=v.end(); it++)
	{
		cout << *it << endl;
	}
	for(auto it:v){
		cout << it << " " << endl;
	}
	
	cout << v[2] << endl;
}