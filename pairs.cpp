#include <iostream>
#include <vector>
#include <string>
#include<bits/stdc++.h>
using namespace std;

int main()
{
    // print hello world
    pair<int, int> p = {2,52};
    cout << p.first << " " << p.second << endl;

    // nested pairs
    pair<int, pair<int, int>> p1 = {1, {2, 3}};
    cout << p1.first << " " << p1.second.first << " " << p1.second.second << endl;

    pair<int, int> arr[] = {{1, 2}, {2, 3}, {3, 4}};
    cout << arr[0].first << " " << arr[2].second << endl;
    
    cout << "Hello World " << endl;
}